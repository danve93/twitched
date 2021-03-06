import React, { Component } from 'react'
import { Row, Col, Nav } from 'react-bootstrap';
import Carousel from './carousel.js'
import Streams from './components/pages/streams.js'
import Games from './components/pages/games.js'

export class Home extends Component {
    render() {
        return (
            <Col margin-top='5px' >
                <Carousel />
                <Row>
                    <a className='mt-3 ml-3' href="/Sfoglia" style={{ 'color': 'white', 'font-size': '30px' }}><b>Categorie</b> che potrebbero piacerti</a>
                </Row>
                <Row>
                    <Games />
                </Row>

                <Row>
                    <a className='mt-3 ml-3' href="/Sfoglia" style={{ 'color': 'white', 'font-size': '30px' }}><b>Canali Live</b> che potrebbero piacerti</a>
                </Row>
                <Row>
                    <Streams />
                </Row>
            </Col>
        )
    }
}

export default Home
