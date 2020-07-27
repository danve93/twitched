import React, { Component } from 'react'
import { TwitchPlayer } from 'react-twitch-embed';
import ReactPlayer from "react-player"
import { Container, Col, Carousel, ResponsiveEmbed } from 'react-bootstrap';
// TwitchEmbed, TwitchChat, TwitchClip,

export class carousel extends Component {
    render() {
        return (
            <Container >
                <Col className='pl-0 mt-3 .d-none .d-lg-block .d-xl-none' align-content-center>
                    <Carousel pauseOnHover={true} interval="5000" >
                        <Carousel.Item style={{ 'margin-left': "210px", 'margin-top': "30px", 'height': "auto", 'width': "770px", }}>
                            <ResponsiveEmbed aspectRatio="16by9">
                                <ReactPlayer url="https://www.twitch.tv/thesensei420" playing='true' controls='false' />
                            </ResponsiveEmbed>
                        </Carousel.Item>
                        <Carousel.Item style={{ 'margin-left': "210px", 'margin-top': "30px", 'height': "auto", 'width': "770px", }}>
                            <ResponsiveEmbed aspectRatio="16by9">
                                <ReactPlayer url="https://www.twitch.tv/loserfruit" playing='false' controls />
                            </ResponsiveEmbed>
                        </Carousel.Item>
                        <Carousel.Item style={{ 'margin-left': "210px", 'margin-top': "30px", 'height': "auto", 'width': "770px", }}>
                            <ResponsiveEmbed aspectRatio="16by9">
                                <ReactPlayer url="https://www.twitch.tv/nnarcos" playing='false' controls />
                            </ResponsiveEmbed>
                        </Carousel.Item>
                    </Carousel></Col></Container>
        )
    }
}

export default carousel