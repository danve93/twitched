import React, { useState, useEffect } from "../../../node_modules/react";
import { Link } from "../../../node_modules/react-router-dom";
import api from "./api";
import { Card, Row } from "react-bootstrap"

function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/games/top");
            let dataArray = result.data.data.slice(0, 4);
            let finalArray = dataArray.map(game => {
                let newURL = game.box_art_url
                    .replace("{width}", "300")
                    .replace("{height}", "300");
                game.box_art_url = newURL;
                return game;
            });
            setGames(finalArray);
        };
        fetchData();
    }, []);

    return (
            <Row>
                {games.map(game => (
                    <div className='col-md-3 col-md-3 col-md-3 mt-2'>
                        <Card style={{ width: '200px', height: '350px'}}>
                            <Card.Img style={{ width: '200px', height: '250px'}} className="card-img-top" src={game.box_art_url} />
                            <Card.Body style={{ width: '200px', height: '250px'}}>
                                <Card.Title className="acapo"></Card.Title>
                                <button className="mr-1 btn tn-success twitch-bg ">
                                    <Link 
                                        className="link dark-text"
                                        to={{
                                            pathname: "game/" + game.name,
                                            state: {
                                                gameID: game.id
                                            }
                                        }}
                                    >
                                        {game.name}{" "}
                                    </Link>
                                </button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Row>
    );
}

export default Games;