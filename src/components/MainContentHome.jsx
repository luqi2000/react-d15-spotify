import React, { useEffect, useState } from "react";
import "../style.css";
import { Card, Col, Row } from "react-bootstrap";

const MainContentHome = () => {
  let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

  let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  const [songs, setSongs] = useState([]);

  function RandomArtist() {
    let randomIndex = Math.floor(Math.random() * rockArtists.length);
    return randomIndex;
  }

  let random1 = RandomArtist();

  const RockClassics = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${random1}`;

  const FetchData = async () => {
    try {
      const response = await fetch(RockClassics);
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);

        setSongs(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#trending">TRENDING</a>
          <a href="#podcast">PODCAST</a>
          <a href="#moods">MOODS AND GENRES</a>
          <a href="#new">NEW RELEASES</a>
          <a href="#discover">DISCOVER</a>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2 className="">Rock Classics</h2>
            <Row className="justify-content-center">
              {songs.splice(0, 4).map(track => (
                <Col key={track.id} md={3}>
                  <Card className="bg-black text-white">
                    <Card.Img src={track.album.cover_medium} className="w-100 object-fit-cover" alt="album cover" />
                    <Card.Body>
                      <Card.Title className="text-truncate">{track.title}</Card.Title>
                      <Card.Link href="/artist">{track.artist.name}</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row className="justify-content-center">
              {songs.splice(0, 4).map(track => (
                <Col key={track.id} md={3}>
                  <Card className="bg-black text-white">
                    <Card.Img src={track.album.cover_medium} className="w-100 object-fit-cover" alt="album cover" />
                    <Card.Body>
                      <Card.Title className="text-truncate">{track.title}</Card.Title>
                      <Card.Link href="/artist">{track.artist.name}</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row className="justify-content-center">
              {songs.splice(0, 4).map(track => (
                <Col key={track.id} md={3}>
                  <Card className="bg-black text-white">
                    <Card.Img src={track.album.cover_medium} className="w-100 object-fit-cover" alt="album cover" />
                    <Card.Body>
                      <Card.Title className="text-truncate">{track.title}</Card.Title>
                      <Card.Link href="/artist">{track.artist.name}</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default MainContentHome;
