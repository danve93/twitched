import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Dropdown, Row, Col, Accordion, Button } from 'react-bootstrap';
import './navbarcss.css'
import React, { useEffect, useState } from "react";
import Live from './images/live.svg';
import Arrow from './images/arrow.svg';
import { Component } from 'react';
import api from "./components/pages/api.js";

function Sidebar() {
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/streams");
            let dataArray = result.data.data.slice(0, 24);
            let gameIDs = dataArray.map(stream => {
                return stream.game_id;
            });

            let baseURL = "https://api.twitch.tv/helix/games?";
            let queryParams = "";
            gameIDs.map(id => {
                return (queryParams = queryParams + `id=${id}&`);
            });

            let finalURL = baseURL + queryParams;
            let gameNames = await api.get(finalURL);
            let gameNameArray = gameNames.data.data;

            let finalArray = dataArray.map(stream => {
                stream.gameName = "";
                gameNameArray.map(name => {
                    if (stream.game_id === name.id) {
                        return (stream.gameName = name.name);
                    }
                });

                let newURL = stream.thumbnail_url
                    .replace("{width}", "500")
                    .replace("{height}", "300");
                stream.thumbnail_url = newURL;
                return stream;
            });
            setChannels(finalArray);
        };
        fetchData();
    }, []);

    return (
        <Accordion defaultActiveKey="0">
            <div>
                <Accordion.Collapse eventKey="0">
                    <Navbar collapseOnSelect expand="lg" className="navbar-font sidedar flex-column" >
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Col>
                                <Row style={{ 'marginBottom': "15px" }} />
                                <ul className='navbar-font' style={{ 'font-size': "15px", 'color': "white", 'marginBottom': "15px" }}>
                                    <b>CANALI AL TOP</b></ul>
                                <div> {channels.map(channel => (
                                    <Row>
                                        <Col className='navbar-font pl-5'>
                                            <Row>
                                                <Nav.Link className='d-flex justify-content-start' eventKey="link-1" style={{ 'color': 'white', 'fontsize': "12px" }}>
                                                    <b>{channel.user_name}</b>
                                                </Nav.Link>
                                            </Row>
                                            <Row>
                                                <Nav.Link eventKey="link-1" style={{ 'color': 'grey', 'fontsize': "10px" }} />
                                            </Row>
                                        </Col>
                                        <Col className='navbar-font pr-4'>
                                            <Row>
                                                <Nav.Link eventKey="link-1" style={{ 'color': 'white', 'fontsize': "14px" }}>
                                                    <img alt='' className='mb-1' src={Live} /> {channel.viewer_count}
                                                </Nav.Link>
                                            </Row>
                                        </Col>
                                    </Row>
                                ))
                                } 
                                </div>
                            </Col>
                        </Navbar.Collapse>
                    </Navbar>
                </Accordion.Collapse>
                <Accordion.Toggle collapseOnSelect expand="lg" as={Button} className='my-primary' variant="text" eventKey="0">
                    <img alt='' className='ml-3 mb-1 navBTN' src={Arrow} /> Clicca per ridurre
                </Accordion.Toggle>
            </div>
        </Accordion>
    )
}

export default Sidebar

{/* 
// return (
//     <Navbar className="sidedar flex-grow" variant="dark" >
//         <ul className="navbar-nav mr-2">
//             <Nav defaultActiveKey="/home" className="flex-column">
//                 <ul>
//                     <Dropdown.Divider style={{ 'marginBottom': "15px" }} />
//                     <ul style={{ 'fontsize': "16px", 'color': "white", 'marginBottom': "15px" }}>CANALI CHE SEGUI</ul>

//                     <li>
//                         <Nav.Link eventKey="link-1" style={{ 'fontsize': "14px", 'marginBottom': "5px" }}>{this.dataArray.stream.subName[0]}</Nav.Link>
//                     </li >
//                     <li>
//                         <Nav.Link eventKey="link-1" style={{ 'fontsize': "14px", 'marginBottom': "5px" }}>{this.stream.subName[1]}</Nav.Link>
//                     </li >
//                     <li>
//                         <Nav.Link eventKey="link-1" style={{ 'fontsize': "14px", 'marginBottom': "5px" }}>{this.stream.subName[2]}</Nav.Link>
//                     </li >

//                     <Dropdown.Divider style={{ 'marginBottom': "15px" }} />
//                     <ul style={{ 'fontsize': "16px", 'color': "white", 'marginBottom': "15px" }}>CANALI CONSIGLIATI</ul>
//                     <li>
//                         <Nav.Link eventKey="link-3" style={{ 'fontsize': "14px", 'marginBottom': "5px" }}>canale suggerito 1</Nav.Link>
//                     </li>
//                     <li>
//                         <Nav.Link eventKey="link-3" style={{ 'fontsize': "14px", 'marginBottom': "5px" }}>canale suggerito 2</Nav.Link>
//                     </li>
//                     <li>
//                         <Nav.Link eventKey="link-3" style={{ 'fontsize': "14px", 'marginBottom': "5px" }}>canale suggerito 3</Nav.Link>
//                     </li>
//                     <Dropdown.Divider style={{ 'marginBottom': "15px" }} />

//                     <ul className="align-self-baseline">
//                         <InputGroup className='mt-5'>
//                             <InputGroup.Prepend>
//                                 <Button variant="outline-secondary" size="sm"><img src={Search}
//                                     width="15"
//                                     height="15"
//                                     className="d-inline-block align-left"
//                                     alt=""
//                                 /></Button>
//                             </InputGroup.Prepend>
//                             <FormControl style={{ 'fontsize': "11px" }} placeholder="Cerca i tuoi amici" aria-describedby="basic-addon1" className="" />
//                         </InputGroup>
//                     </ul>
//                 </ul>
//             </Nav>
//         </ul>
//     </Navbar>
// )
// } */}

