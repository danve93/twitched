import React, { useEffect, useState } from "../../../node_modules/react";
import api from "./api";
import { Card, Row } from 'react-bootstrap'

function Stream() {
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/streams");
            let dataArray = result.data.data.slice(0, 4);
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
        <Row>
            {channels.map(channel => (
                <div className='col-md-3 col-md-3 col-md-3 mt-2'>
                    <Card>
                        <Card.Img className="card-img-top" src={channel.thumbnail_url} />
                        <Card.Body className="flex">
                            <Card.Title>{channel.user_name}</Card.Title>
                            <Card.Title className="acapo" ><b>{channel.gameName}</b></Card.Title>
                            <Card.Text>
                                {channel.viewer_count} spettatori online
                </Card.Text>
                            <button className="btn  twitch-bg">
                                <a
                                    href={"https://twitch.tv/" + channel.user_name}
                                    className="dark-text"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Guarda lo stream di  {channel.user_name}
                                </a>
                            </button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Row>
    );
}

export default Stream;