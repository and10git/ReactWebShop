import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import NetContext from "../Context/NetContext"

function Productos(props) {
  return (
    <NetContext.Consumer>
      {
        context =>
          <div>
            <Card className="mr-3 mt-3 mb-3 text-center" style={{ width: '20rem', height: '25rem' }}>
              <Card.Body>
                <Card.Title>{props.productos.data().name}</Card.Title>
                <Card.Img src={props.productos.data().img} id="imgProductos " style={{ width: '15rem' }}></Card.Img>
              </Card.Body>

              <div>
                <Card.Text className="text-dark mt-2" id="priceProducto"> ${props.productos.data().price}</Card.Text>
                <Link to={"/productos/" + props.productos.id}><Button id="btnProductos" className="mr-1 mb-2" variant="primary">Ver</Button></Link>
                {
                  context.login &&
                  <Link to={"/productos/editar/" + props.productos.id}><Button id="btnProductos" className="mb-2" variant="primary">Editar</Button></Link>
                }

              </div>
            </Card >

          </div>
      }
    </NetContext.Consumer>
  );
}

export default Productos;

