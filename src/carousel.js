import React, { Component } from 'react'
import { TwitchPlayer } from 'react-twitch-embed';
import ReactPlayer from "react-player"
import { Container, Col, Carousel } from 'react-bootstrap';
// TwitchEmbed, TwitchChat, TwitchClip,

export class carousel extends Component {
    render() {
        return (
            <Carousel className='col-flex' pauseOnHover={true} interval="5000" >
                <Carousel.Item >
                    <ReactPlayer url="https://www.twitch.tv/thesensei420" playing='true' controls style={{ 'margin-left': "180px", 'margin-top': "30px",'height': "430px", 'width': "770px", }} />
                </Carousel.Item>
                <Carousel.Item >
                    <ReactPlayer url="https://www.twitch.tv/loserfruit" playing='false'controls style={{ 'margin-left': "180px", 'margin-top': "30px", 'height': "430px", 'width': "770px", }} />
                </Carousel.Item>
                <Carousel.Item >
                    <ReactPlayer url="https://www.twitch.tv/thevalentinanappi" playing='false'controls style={{ 'margin-left': "180px", 'margin-top': "30px", 'height': "430px", 'width': "770px", }} />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default carousel



