import React, { useContext, useState }from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from 'react-bootstrap/Container';
import  Image  from "react-bootstrap/Image";
import bigStar from '../assets/bigStar.png'
import { Button } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import DeleteDevice from "../components/modals/DeleteDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [deviceDeleteVisible, setDeviceDeleteVisible] = useState(false)

  return (
    <Container className="d-flex flex-column">
        <Button variant={"outline-dark"} className="mt-2 p-2" onClick={()=> setTypeVisible(true)}>Добавить тип</Button>
        <Button variant={"outline-dark"} className="mt-2 p-2" onClick={()=> setBrandVisible(true)}>Добавить бренд</Button>
        <Button variant={"outline-dark"} className="mt-2 p-2" onClick={()=> setDeviceVisible(true)}>Добавить устройство</Button>
        <Button variant={"outline-dark"} className="mt-2 p-2" onClick={()=> setDeviceDeleteVisible(true)}>Удалить устройство</Button>
        <CreateType show={typeVisible} onHide={()=> setTypeVisible(false)}/>
        <CreateBrand show={brandVisible} onHide={()=> setBrandVisible(false)}/>
        <CreateDevice show={deviceVisible} onHide={()=> setDeviceVisible(false)}/>
        <DeleteDevice show={deviceDeleteVisible} onHide={()=> setDeviceDeleteVisible(false)}/>
    </Container>
  );
};

export default Admin;