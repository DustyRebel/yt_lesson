import { observer } from "mobx-react-lite";
import React, { useContext }from "react";
import Card from "react-bootstrap/Card";
import { Context } from "../index";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex"> 
            {device.devices.map(device=>
                <DeviceItem key={device.id} device={device}/>

            )}
        </Row>
    );
    });

export default DeviceList;