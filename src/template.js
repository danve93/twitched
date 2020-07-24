import React, { Component } from 'react'
import Navbar from './navbar.js'
import Sidebar from './sidebar.js'
import { Row, Col, Container } from 'react-bootstrap';

class template extends Component {
    componentDidMount() {
        document.body.style.background = "#0E0E10";
    }

    render() {
        return (
            <Container fluid='true' style={{ ' maxWidth': '100%' }}>
                <Navbar />
                <Col>
                    <Row>
                        <Col xs={2} className='pl-0' >
                            <Sidebar />
                        </Col>
                        {this.props.children}
                    </Row>
                </Col>
            </Container>
        )
    }
}

export default template
