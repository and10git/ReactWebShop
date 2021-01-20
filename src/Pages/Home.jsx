import React, { Component } from "react";
import Productos from "../Components/Productos.jsx";
import firebase from "../Config/firebase";
import { CardGroup, Container, Spinner, Row, Col } from 'react-bootstrap';
import imgAddItem from "../../src/imgAdd.svg";
import { Link } from 'react-router-dom'
import NetContext from "../Context/NetContext"

class Home extends Component {
    constructor() {
        super();
        this.state = {
            productos: [],
            loading: true
        }
    }
    componentDidMount() {
        firebase.db.collection("productos")
            .get()
            .then(querySnapshot => {
                this.setState({
                    productos: querySnapshot.docs,
                    loading: false
                })
            })
    }
    render() {
        if (this.state.loading) {
            return (
                <Container>
                    <div style={{ position: "fixed", top: "50%", left: "50%" }}>
                        <Spinner animation="grow" />
                        <Spinner animation="grow" />
                        <Spinner animation="grow" />
                    </div>
                </Container>
            )
        } else {
            return (
                <NetContext.Consumer>
                    {
                        context =>
                            <Container>
                                <Row style={{ width: '64rem' }}>
                                    <Col id="col1">
                                        <h2 className="mt-4 ml-1 text-dark" >Productos</h2>
                                    </Col>
                                    {
                                        context.login &&
                                        <Col id="col2">
                                            <Link to={"/producto/alta"}>
                                                <img src={imgAddItem} className="mt-4" id="imdAdd" style={{ width: '40px' }} data-toggle="tooltip" title="Agregar producto"></img>
                                            </Link>
                                        </Col>
                                    }
                                </Row>
                                <CardGroup >
                                    {this.state.productos.map((producto, i) => <Productos key={producto.id} productos={producto} />)}
                                </CardGroup>
                            </Container>
                    }
                </NetContext.Consumer>
            )
        }

    }
}

export default Home;