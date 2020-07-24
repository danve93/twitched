import React, { useState, useEffect } from "../../../node_modules/react";
import { Link } from "../../../node_modules/react-router-dom";
import api from "./api";
import { Card, Row, CardColumns, Col } from "react-bootstrap"

function Esports() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/search/categories?query=esports");
            let dataArray = result.data.data.slice(0, 16);
            let finalArray = dataArray.map(game => {
                let newURL = game.box_art_url
                    .replace("{width}", "600")
                    .replace("{height}", "600");
                game.box_art_url = newURL;
                return game;
            });
            setGames(finalArray);
        };
        fetchData();
    }, []);

    return (
        <Col xs={9}>
            <div className='navbar-font' style={{ 'color': 'white', 'font-size': '30px', 'margin-top': '8px' }}>
                <b> Sportivo? Prova questi streams!</b>
            </div>
            <Row>
                {games.map(game => (
                    <div className='col-md-3 col-md-3 col-md-3 mt-4'>
                        <CardColumns className='flex'>
                            <Card style={{ width: '200px', height: '350px' }}>
                                <Card.Img style={{ width: '200px', height: '250px' }} className="card-img-top" src={game.box_art_url} />
                                <Card.Body style={{ width: '200px', height: '250px' }}>
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
                        </CardColumns>
                    </div>
                ))}
            </Row>
        </Col>
    );
}

export default Esports;