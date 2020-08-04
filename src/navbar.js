import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Button, InputGroup, DropdownButton, Dropdown, Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './images/logo.svg';
import Chat from './images/chat.svg';
import Cerca from './images/search.svg';
import Compra from './images/compra.svg';
import Notifiche from './images/notifiche.svg';
import Premium from './images/premium.svg';
import User from './images/user.svg';
import './navbarcss.css';

export class navbar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="my-primary navbar-font" variant="dark" expand="lg">
                <Dropdown  >
                    <Dropdown.Toggle className='bg-transparent my-primary'
                    ><img src={Logo} width="30" height="30" alt="" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <Dropdown.Item className='my-primary' eventKey="1" href="/">Home</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="1" href="/Seguiti">Seguiti</Dropdown.Item>
                        <Dropdown.Item eventKey="2" href="/Sfoglia">Sfoglia</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="3" href="/Esports">Esports</Dropdown.Item>
                        <Dropdown.Item eventKey="4" href="/Music">Musica</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav.Link className='my-primary' style={{ 'fontsize': "15px" }} href="/Seguiti">Seguiti</Nav.Link>
                    <Nav.Link className='my-primary' style={{ 'fontsize': "15px" }} href="/Sfoglia">Sfoglia</Nav.Link>
                    <Nav.Link className='my-primary' style={{ 'fontsize': "15px" }} href="/Esports">Esports</Nav.Link>
                    <Nav.Link className='my-primary' style={{ 'fontsize': "15px" }} href="/Music">Musica</Nav.Link>
                    <div />

                    <ul className="nav navbar-font navbar-nav ml-5 w-100 justify-content-center">
                        <InputGroup className=" mr-sm-2">
                            <InputGroup.Prepend>
                                <Button className="navBTN" variant="outline-secondary" size="sm"><img src={Cerca}
                                    width="15"
                                    height="15"
                                    margin-left="2px"
                                    className="d-inline-block align-left mr-1"
                                    alt=""
                                /></Button>
                            </InputGroup.Prepend>
                            <FormControl aria-describedby="basic-addon1" className="mr-sm-2" />
                        </InputGroup>
                    </ul>

                    <ul className="nav navbar-nav mr-20 ml-auto w-100 justify-content-end">
                        <Nav.Link href="#premium" data-toggle="tooltip" data-placement="top" title="Accedi ai contenuti Prime">
                            <img src={Premium}
                                width="18px"
                                height="18px"
                                className="d-inline-block align-left mr-2"
                                alt=""
                            /></Nav.Link>
                        <Nav.Link href="#notifiche" data-toggle="tooltip" data-placement="top" title="Non c'è nessuna notifica al momento"><img src={Notifiche}
                            width="18px"
                            height="18px"
                            className="d-inline-block align-left mr-2"
                            alt=""
                        /></Nav.Link>
                        <Nav.Link href="#chat" data-toggle="tooltip" data-placement="top" title="Inizia a chattare"><img src={Chat}
                            width="18px"
                            height="18px"
                            className="d-inline-block align-left mr-2"
                            alt=""
                        /></Nav.Link>
                        <Nav.Link style={{ 'fontsize': "13px" }} href="#compra" data-toggle="tooltip" data-placement="top" title="Acquista credito"><Button className="navBTN" variant="dark" size="sm">
                            <img src={Compra}
                                width="15px"
                                height="15px"
                                className="d-inline-block align-left mr-2 mb-1"
                                alt=""
                            />Compra</Button></Nav.Link>
                    </ul></Navbar.Collapse>

                <Nav.Item className='flex rounded mr-2 ml-3' >
                    <DropdownButton className='fluid my-primary twitch-bg rounded' variant='' alignLeft drop='left' title={<img src={User} width="20" height="20" alt="" />} >
                        <Dropdown.Item className='' eventKey="1" href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=ouulveyk5zqtijgetelrowlgm5yxlt&redirect_uri=http://localhost:3000/&scope=user_read&state=c3ab8aa609ea11e793ae92361f002671">Login</Dropdown.Item>
                        <Form className='pl-4'>
                            <Form.Check type="switch" id="custom-switch" label="Status online" />
                        </Form>
                        <Dropdown.Divider />
                        <Dropdown.Item className='' eventKey="3" href="#">Impostazioni</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item className='' eventKey="4" href="#">Esci</Dropdown.Item>
                    </DropdownButton>
                </Nav.Item>
            </Navbar>
        )
    }
}

export default navbar