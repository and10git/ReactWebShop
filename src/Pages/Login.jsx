import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Card, Form, Alert } from 'react-bootstrap';
import firebase from "../Config/firebase"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import FormGroup from "../Components/Forms/FormGroup"
import NetConext from "../Context/NetContext"

function Login() {
    const context = useContext(NetConext);
    const [form, setForm] = useState({ email: '', password: '' });
    const [spinner, setSpinner] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSpinner(true);
        let email = form.email;
        let password = form.password;
        
        firebase.auth.signInWithEmailAndPassword(email, password)
            .then((data) => {
                console.log("Usuario logueado", data)
                setSpinner(false);
                context.logInUser();
                //setAlert({variant:"success",text:"Bienvenido/a"})
                history.push("/")
            })
            .catch((error) => {
                console.log("Error", error)
                setSpinner(false);
                //setAlert({variant:"danger",text:"Ha ocurrido un error"})
            })

    }
    const handleChange = (e) => {

        const target = e.target;
        const value = target.value
        const name = target.name;


        setForm({
            ...form,
            [name]: value
        });

    }
    return (
        <Card style={{ width: '30%'}} className="mt-4 ml-2">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <FormGroup label="Email" type="email" placeholder="Ingrese su email" name="email" value={form.email} change={handleChange} />
                    <FormGroup label="Contraseña" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} change={handleChange} />
                    <ButtonWithLoading text="Ingresar" loading={spinner} />
                </Form>

            </Card.Body>
        </Card>

    )

}

export default Login;