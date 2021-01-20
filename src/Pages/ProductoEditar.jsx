import React, { useState, useEffect } from 'react';
import firebase from '../Config/firebase';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function ProductoEditar(props) {
    const [datos, setDatos] = useState({ name: '', price: '', SKU: '', description: '' , img:''});
    useEffect(
        () => {
            const id = props.match.params.id;
            firebase.db.doc("productos/" + id)
                .get()
                .then(doc => {
                    setDatos(doc.data())
                    console.log(doc.data())
                })
        }, []);

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
        console.log("datos", datos)
        const id = props.match.params.id;

        firebase.db.doc("productos/" + id)
            .set({
                name: datos.name,
                price: datos.price,
                SKU: datos.SKU,
                description: datos.description,
                img: datos.img,
            }, { merge: true })
            .then(doc => {
                console.log(doc)
            })
        e.preventDefault();
    }

    const handleDelete = (e) => {
        const id = props.match.params.id;
        console.log("Eliminar", id)
        firebase.db.doc("productos/" + id)
            .delete()
            .then(doc => {
                console.log(doc)
            })
            e.preventDefault();
    }
    return (
        <div style={{ width: '20%' }} className="ml-3">
            <h3 className="mt-3 text-dark" >Editar producto</h3>
            <form onSubmit={handleSubmit} id="label">
                <div>
                    <label className="mt-2">Nombre</label>
                    <input type="text" className="form-control" name="name" value={datos.name} onChange={handleChange}></input>
                </div>
                <div>
                    <label  className="mt-2">Descripción</label>
                    <input type="text" className="form-control" name="description" value={datos.description} onChange={handleChange}></input>
                </div>
                <div>
                    <label className="mt-2">SKU</label>
                    <input type="number" className="form-control" name="SKU" value={datos.SKU} onChange={handleChange}></input>
                </div>
                <div>
                    <label  className="mt-2">Precio</label>
                    <input type="number" className="form-control" name="price" value={datos.price} onChange={handleChange}></input>
                </div>
                <div>
                    <label  className="mt-2">Url Imagen</label>
                    <input type="text" className="form-control" name="img" value={datos.img} onChange={handleChange}></input>
                </div>
                <Button className="mr-1 mt-3 btn btn-success" type="submit">Guardar</Button>
                <Button className="mr-1 mt-3 btn-danger" onClick={handleDelete}>Eliminar</Button>
                <Link to={"/"}><Button className="mt-3" variant="primary">Volver</Button></Link>
            </form>
        </div>
    )
}





export default ProductoEditar