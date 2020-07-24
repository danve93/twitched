import React, { useState, useEffect } from "../../../node_modules/react";
import api from "./api";
import { Card, Row } from "react-bootstrap"

function GameStreams({ match, location }) {
    const [streamData, setStreamData] = useState([]);
    const [viewers, setViewers] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get(
                `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`
            );
            let dataArray = result.data.data;
            let finalArray = dataArray.map(stream => {
                let newURL = stream.thumbnail_url
                    .replace("{width}", "300")
                    .replace("{height}", "300");
                stream.thumbnail_url = newURL;
                return stream;
            });

            let totalViewers = finalArray.reduce((acc, val) => {
                return acc + val.viewer_count;
            }, 0);
            setViewers(totalViewers);
            setStreamData(finalArray);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="text-center">{match.params.id} Streams popolari</h1>
            <h3 className="text-center">
                <strong className="text-primary">{viewers}</strong> people currently
        watching {match.params.id}
            </h3>
            <Row>
                {streamData.map(stream => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <Card>
                            <Card.Img className="card-img-top" src={stream.thumbnail_url} />
                            <Card.Body>
                                <Card.Title className="card-title">{stream.user_name}</Card.Title>
                                <Card.Text>
                                    {stream.viewer_count} live viewers
                </Card.Text>
                                <button className="btn btn-success">
                                    <a
                                        className="link"
                                        href={"https://twitch.tv/" + stream.user_name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        watch {stream.user_name}'s channel
                  </a>
                                </button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Row>
        </div>
    );
}

export default GameStreams;
