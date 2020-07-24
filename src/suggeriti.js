import React, { Component } from 'react'
import { Card, CardDeck, Nav } from 'react-bootstrap'
// import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';

export class suggeriti extends Component {
    render() {
        return (
            <CardDeck>
                <Nav.Link className='mr-2' style={{ width: '270px', height: '300px', }}><Card className='sidedar' style={{ width: '270px', height: '300px' }}>
                    <Card.Img href='#ApexLegends' style={{ height: '150px' }} variant="top" src="https://static-cdn.jtvnw.net/previews-ttv/live_user_ashm0nster-440x248.jpg" />
                    <Card.Body>
                        <Card.Title style={{ 'fontsize': '15px', 'color': 'white' }}>[ PC BLIND] L'inizio Di Una Grande Avventura!!!  </Card.Title>
                        <Card.Title style={{ 'fontsize': '15px', 'color': 'white' }}>Death Stranding </Card.Title>
                        <Card.Text style={{ 'fontsize': '13px', 'color': 'white' }}>
                            254 spettatori
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rounded-pill">Italiano </small><small className="text-muted">Multiplayer</small>
                    </Card.Footer>
                </Card></Nav.Link>
                <Nav.Link className='mr-2' style={{ width: '270px', height: '300px', }}><Card className='sidedar' style={{ width: '270px', height: '300px' }}>
                    <Card.Img style={{ height: '150px' }} variant="top" src="https://static-cdn.jtvnw.net/previews-ttv/live_user_nnarcos-440x248.jpg" />
                    <Card.Body>
                        <Card.Title style={{ 'fontsize': '15px', 'color': 'white' }}>LONG STREAM - !commission !prime</Card.Title>
                        <Card.Title style={{ 'fontsize': '15px', 'color': 'white' }}>Jurassic Park</Card.Title>
                        <Card.Text style={{ 'fontsize': '13px', 'color': 'white' }}>
                            334 spettatori
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Inglese </small><small className="text-muted">Gestionale</small>
                    </Card.Footer>
                </Card></Nav.Link>
                <Nav.Link className='mr-2' style={{ width: '270px', height: '300px', }}><Card className='sidedar' style={{ width: '270px', height: '300px' }}>
                    <Card.Img style={{ height: '150px' }} variant="top" src="https://static-cdn.jtvnw.net/previews-ttv/live_user_lyvane-440x248.jpg" />
                    <Card.Body>
                        <Card.Title style={{ 'fontsize': '15px', 'color': 'white' }}>Leveling? e Chiacchiere Mattutine -!Newplayer</Card.Title>
                        <Card.Title style={{ 'fontsize': '15px', 'color': 'white' }}>World of Warcraft</Card.Title>
                        <Card.Text style={{ 'fontsize': '13px', 'color': 'white' }}>
                            31 spettatori
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Italiano </small><small className="text-muted">MMOrpg</small>
                    </Card.Footer>
                </Card></Nav.Link>
            </CardDeck>
        )
    }
}

export default suggeriti
