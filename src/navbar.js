import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Button, InputGroup } from 'react-bootstrap';
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

                <Nav.Link href="/"><img src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-left"
                    alt="" /></Nav.Link>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav.Link className='my-primary' style={{ 'fontsize': "15px" }} href="/Seguiti">Seguiti</Nav.Link>
                    <Nav.Link className='my-primary' style={{ 'fontsize': "15px" }} href="/Sfoglia">Sfoglia</Nav.Link>
                    <Nav.Link className='my-primary' style={{ 'fontsize': "15px" }} href="/Esports">Esports</Nav.Link>
                    <Nav.Link className='my-primary' style={{ 'fontsize': "15px" }} href="/Music">Musica</Nav.Link>
                    <Nav.Link className='my-primary' style={{ 'fontsize': "15px" }} href="#...">...</Nav.Link>
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
                <Nav.Link className='fluid twitch-bg rounded mr-2'  href="https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=ouulveyk5zqtijgetelrowlgm5yxlt&redirect_uri=http://localhost:3000/&scope=user_read&state=c3ab8aa609ea11e793ae92361f002671" variant="" alignRight id="dropdown-menu-align-right" size="sm">
                    <img alt='userlogo'
                        className=''
                        width="20px"
                        height="20px"
                        src={User} />
                </Nav.Link>
            </Navbar>
        )
    }
}

export default navbar