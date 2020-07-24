import React, { useEffect, useState } from "../../../node_modules/react";
import api from "./api";
import { Card, Row, Col } from 'react-bootstrap'

function Seguiti() {
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/streams");
            let dataArray = result.data.data.slice(0, 16);
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
        <Col xs={9}>
        <Row>
            {channels.map(channel => (
                <div className='col-md-3 col-md-3  mt-5 p-0 ml-5'>
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
            </Row></Col>
    );
}

export default Seguiti;

// import React, { useState, useEffect } from "../../../node_modules/react";
// import { Link } from "../../../node_modules/react-router-dom";
// import api from "./api";
// import { Card, Row, CardColumns, Col } from "react-bootstrap"

// function Seguiti() {
//     const [follows, setFollows] = useState([]);
//     const [followsImage, setImages] = useState([]);


//     useEffect(() => {
//         const fetchData = async () => {
//             // const result = await api.get("https://api.twitch.tv/helix/users?login=bonsaisushi");
//             const result = await api.get("https://api.twitch.tv/helix/users/follows?from_id=93865173");
//             let dataArray = result.data.data.slice(0, 16);
//             let finalArray = dataArray.map(follow => {
//                 return follow;
//             });
//             setFollows(finalArray);

//             for (var i = 0; i < setFollows.lenght; i++) {
//                 const resultStream = await api.get(`https://api.twitch.tv/helix/users?login=${follows.to_name}`);
//                 let dataArrayStream = resultStream.data.data.slice(0, 16);
//                 let finalArrayStream = dataArrayStream.map(followImage => {
//                     let newURLStream = followImage.profile_image_url
//                         .replace("{width}", "600")
//                         .replace("{height}", "600");
//                         followImage.profile_image_url = newURLStream;
//                     return followImage;
//                 });
//                 setImages(finalArrayStream);
//             }
//         }
//         fetchData();
//     }, []);

//     return (
//         <Col xs={9}>
//             <div className='navbar-font' style={{ 'color': 'white', 'font-size': '30px', 'margin-top': '8px' }}>
//                 <b> I tuoi preferiti sono pronti per lo show</b>
//             </div>
//             <Row>
//                 {follows.map(followImage => (
//                     <div className='col-md-3 col-md-3 col-md-3 mt-4'>
//                         <CardColumns className='flex'>
//                             <Card style={{ width: '200px', height: '350px' }}>
//                                 <Card.Img style={{ width: '200px', height: '250px' }} 
//                                 className="card-img-top" src={followImage.profile_image_url} 
//                                 />
//                                 <Card.Body style={{ width: '200px', height: '250px' }}>
//                                     <Card.Title className="acapo">{followImage.to_name}</Card.Title>
//                                     <button className="mr-1 btn tn-success twitch-bg ">
//                                         <Link
//                                             className="link dark-text"
//                                             to={{
//                                                 pathname: "game/" + followImage.to_name,
//                                                 state: {
//                                                     gameID: followImage.to_name
//                                                 }
//                                             }}
//                                         >
//                                             {followImage.to_name}{" "}
//                                         </Link>
//                                     </button>
//                                 </Card.Body>
//                             </Card>
//                         </CardColumns>
//                     </div>
//                 ))}
//             </Row>
//         </Col>
//     );
// }

// export default Seguiti;