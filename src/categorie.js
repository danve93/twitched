import React, { Component } from 'react'
import { Card, CardDeck, Nav } from 'react-bootstrap'

export class categorie extends Component {
    render() {
        return (
            <CardDeck>
                <Nav.Link className='mr-1' style={{ width: '170px', height: '300px', }}><Card className='sidedar' style={{ width: '170px', height: '300px' }}>
                    <Card.Img href='#ApexLegends' style={{ height: '150pxpx' }} variant="top" src="https://static-cdn.jtvnw.net/ttv-boxart/Apex%20Legends-188x250.jpg" />
                    <Card.Body>
                        <Card.Title style={{ 'fontSize': '15px', 'color': 'white' }}><b>Apex Legends</b></Card.Title>
                        <Card.Text style={{ 'fontSize': '13px', 'color': 'white' }}>
                            31.234 spettatori
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted rounded-pill">FPS </small><small className="text-muted">Sparatutto</small>
                    </Card.Footer>
                </Card></Nav.Link>
                <Nav.Link className='mr-1' style={{ width: '170px', height: '300px', }}><Card className='sidedar' style={{ width: '170px', height: '300px' }}>
                    <Card.Img style={{ height: '150pxpx' }} variant="top" src="https://static-cdn.jtvnw.net/ttv-boxart/Hyper%20Scape-188x250.jpg" />
                    <Card.Body>
                        <Card.Title style={{ 'fontSize': '15px', 'color': 'white' }}><b>Hyperscape</b></Card.Title>
                        <Card.Text style={{ 'fontSize': '13px', 'color': 'white' }}>
                            19.896 spettatori
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">FPS </small><small className="text-muted">Sparatutto</small>
                    </Card.Footer>
                </Card></Nav.Link>
                <Nav.Link className='mr-1' style={{ width: '170px', height: '300px', }}><Card className='sidedar' style={{ width: '170px', height: '300px' }}>
                    <Card.Img style={{ height: '150pxpx' }} variant="top" src="https://static-cdn.jtvnw.net/ttv-boxart/Call%20of%20Duty:%20Modern%20Warfare-188x250.jpg" />
                    <Card.Body>
                        <Card.Title style={{ 'fontSize': '15px', 'color': 'white' }}><b>Call of Duty</b></Card.Title>
                        <Card.Text style={{ 'fontSize': '13px', 'color': 'white' }}>
                            78.022 spettatori
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">FPS </small><small className="text-muted">Sparatutto</small>
                    </Card.Footer>
                </Card></Nav.Link>
                <Nav.Link className='mr-1' style={{ width: '170px', height: '300px', }}><Card className='sidedar' style={{ width: '170px', height: '300px' }}>
                    <Card.Img style={{ height: '150pxpx' }} variant="top" src="https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-188x250.jpg" />
                    <Card.Body>
                        <Card.Title style={{ 'fontSize': '15px', 'color': 'white' }}><b>4 chiacchiere</b></Card.Title>
                        <Card.Text style={{ 'fontSize': '13px', 'color': 'white' }}>
                            24.054 spettatori
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">IRL </small>
                    </Card.Footer>
                </Card></Nav.Link>
                <Nav.Link className='mr-1' style={{ width: '170px', height: '300px', }}><Card className='sidedar' style={{ width: '170px', height: '300px' }}>
                    <Card.Img style={{ height: '150pxpx' }} variant="top" src="https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-188x250.jpg" />
                    <Card.Body>
                        <Card.Title style={{ 'fontSize': '15px', 'color': 'white' }}><b>Fortnite</b></Card.Title>
                        <Card.Text style={{ 'fontSize': '13px', 'color': 'white' }}>
                            65.079 spettatori
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">FPS </small><small className="text-muted">Sparatutto</small>
                    </Card.Footer>
                </Card></Nav.Link>

            </CardDeck>
        )
    }
}

export default categorie
