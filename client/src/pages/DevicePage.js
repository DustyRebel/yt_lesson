import React, { useContext }from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container';
import  Image  from "react-bootstrap/Image";
import bigStar from '../assets/bigStar.png'
import { Button } from "react-bootstrap";

const DevicePage = () => {
    const device = {id: 1, name: "Popa", price: 1000, rating: 5, img: `https://zoobonus.ua/storage/breeds/images/big/fNBSdOaPk4TqC5lJwxX9TlsPGlF8BSZTV2lQGwZa.jpeg`}
    const description = [
        {id:1, title: 'Размер', description: '100х100 мм'},
        {id:2, title: 'Вес', description: '100 г'},
        {id:3, title: 'Цвет', description: 'Фиолетовый'},
        {id:4, title: 'Какал?', description: 'да'},
        {id:5, title: 'Писал?', description: 'нет'}
    ]
    return (
        <Container>
            <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
            </Col>
            <Col md={4}>
                <Row className="d-flex flex-colomn align-items-center">
                    <h2>{device.name}</h2>
                    <div 
                        className="d-flex align-items-center justify-content-center"
                        style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize:64}}
                    >
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width:300, height:300, fontSize:32, border: '5px solid lightgrey'}}
                >
                    <h3>{device.price} руб.</h3>
                    <Button variant={"outline-dark"}>Добавить в корзину</Button>
                </Card>
            </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index)=>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgrey': 'transparent', padding:10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;