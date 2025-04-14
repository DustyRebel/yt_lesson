import { observer } from "mobx-react-lite";
import React, { useContext }from "react";
import Card from "react-bootstrap/Card";
import { Context } from "../index";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.brands.map(brand=>(
                <Col key={brand.id} xs="auto" className="mb-2">
                <Card 
                style={{cursor:'pointer'}}
                key={brand.id} 
                className="p-3" 
                onClick={()=>{device.setSelectedBrand(brand)}}
                border={brand.id === device.selectedBrand.id ? 'dark': 'light'}
                >
                    {brand.name}
                </Card>
                </Col>

            ))}
        </Row>
    );
    });

export default BrandBar;