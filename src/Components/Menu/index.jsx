import React from "react";
import MenuOpciones from "./MenuOpciones"
import { Navbar, Nav, FormLabel } from 'react-bootstrap'
import NetContext from "../../Context/NetContext"

function Menu() {
    return (
        <NetContext.Consumer>
            {
                context =>
                    <div>
                        <h1 className="mb-2 text-dark">WEB-SHOP</h1>
                        <Navbar expand="lg" className="navbar" bg="dark" variant="blue">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="navbarNavAltMarkup">
                                <Nav className="mt-1">
                                    {
                                        context.login &&
                                        <>
                                            <h4><MenuOpciones opcion={{ label: "Home", path: "/" }} /></h4>
                                            <h4><Nav.Link onClick={context.logOutUser}>Salir</Nav.Link></h4>
                                        </>
                                    }
                                    {
                                        !context.login &&
                                        <>
                                            <h4><MenuOpciones opcion={{ label: "Home", path: "/" }} /></h4>
                                            <h4><MenuOpciones opcion={{ label: "Registro", path: "/registro" }} /></h4>
                                            <h4><MenuOpciones opcion={{ label: "Ingresar", path: "/login" }} /></h4>
                                        </>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
            }

        </NetContext.Consumer>
    )
}

export default Menu;