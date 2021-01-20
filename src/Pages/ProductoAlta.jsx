import React, { useState, useEffect } from 'react';
import firebase from '../Config/firebase'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function ProductoAlta() {
    const [datos, setDatos] = useState({ name: '', price: '', description: '', SKU: '', img: '' });
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value
        const name = target.name

        setDatos({
            ...datos,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        console.log(datos)
        firebase.db.collection('productos').add(datos)
            .then(doc => { console.log(doc) })
        e.preventDefault();
    }
    return (
        <div style={{ width: '20%' }} className="ml-3">
            <h3 className="mt-3 text-dark" >Nuevo producto</h3>
            <form onSubmit={handleSubmit} id="label">
                <div>
                    <label className="mt-2">Nombre</label>
                    <input type="text" className="form-control" name="name" value={datos.name} onChange={handleChange} required></input>
                </div>
                <div>
                    <label className="mt-2">Descripción</label>
                    <input type="text" className="form-control" name="description" value={datos.description} onChange={handleChange} required></input>
                </div>
                <div>
                    <label className="mt-2">SKU</label>
                    <input type="number" className="form-control" name="SKU" value={datos.SKU} onChange={handleChange} required></input>
                </div>
                <div>
                    <label className="mt-2">Precio</label>
                    <input type="number" className="form-control" name="price" value={datos.price} onChange={handleChange} required></input>
                </div>
                <div>
                    <label className="mt-2">Url Imagen</label>
                    <input type="text" className="form-control" name="img" value={datos.img} onChange={handleChange}></input>
                </div>
                <Button className="mr-1 mt-3 btn btn-success" type="submit">Guardar</Button>
                <Link to={"/"}><Button className="mt-3" variant="primary">Volver</Button></Link>
            </form>
        </div>
    )
}

export default ProductoAlta