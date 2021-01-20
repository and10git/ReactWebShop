import React, { useState, useEffect } from "react";
import firebase from "../Config/firebase"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import NetConext from "../Context/NetContext"

function ProductoDetalle(props) {

    const [producto, setProducto] = useState({})
    const [show, setShow] = useState(false);

    useEffect(
        () => {
            firebase.db.doc("productos/" + props.match.params.id)
                .get()
                .then(doc => {
                    console.log("doc", doc.data())
                    setProducto(doc.data())
                })
        }, []
    )

    if (show) {
        return (
            <NetConext.Consumer>
                {
                    context =>
                        <div>
                            {
                                !context.login &&
                                <>
                                    <Alert variant="danger" onClose={() => setShow(false)} dismissible className="ml-2 mt-3" style={{ width: "40rem" }}>
                                        <Alert.Heading>¡Ups!</Alert.Heading>
                                        <p>Debe iniciar sesión para poder comprar</p>
                                    </Alert>
                                </>
                            }
                            {
                                context.login &&
                                <>
                                    <Alert variant="success" onClose={() => setShow(false)} dismissible className="ml-2 mt-3" style={{ width: "40rem" }}>
                                        <Alert.Heading>¡Gracias!</Alert.Heading>
                                        <p>La compra ha sido exitosa</p>
                                    </Alert>
                                </>
                            }
                            <Card style={{ width: '40rem' }} className="ml-2 mt-3">
                                <Card.Body>
                                    <Card.Title>{producto.name}</Card.Title>
                                    <Card.Img src={producto.img} style={{ width: '30rem' }} className="mt-2 mb-2"></Card.Img>
                                    <Card.Text>{producto.description}</Card.Text>
                                    <Card.Text>SKU: {producto.SKU}</Card.Text>
                                    <Card.Text>${producto.price}</Card.Text>
                                    <Button className="bg-success" onClick={() => setShow(true)} >Comprar</Button>
                                    <Link to={"/"}><Button className="ml-2 bg-primary">Volver</Button></Link>
                                </Card.Body>
                            </Card>
                        </div>
                }
            </NetConext.Consumer>
        );
    }

    return (
        <Card style={{ width: '40rem' }} className="ml-2 mt-3" >
            <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Img src={producto.img} style={{ width: '30rem' }} className="mt-2 mb-2"></Card.Img>
                <Card.Text>{producto.description}</Card.Text>
                <Card.Text>SKU: {producto.SKU}</Card.Text>
                <Card.Text>${producto.price}</Card.Text>
                <Button className="bg-success" onClick={() => setShow(true)} >Comprar</Button>
                <Link to={"/"}><Button className="ml-2 bg-primary">Volver</Button></Link>
            </Card.Body>
        </Card>

    )

}

export default ProductoDetalle;