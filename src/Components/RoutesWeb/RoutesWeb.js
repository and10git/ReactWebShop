import {Route} from "react-router-dom"
import Home from "../../Pages/Home"
import Registro from "../../Pages/Registro"
import Login from "../../Pages/Login"
import ProductoDetalle from "../../Pages/ProductoDetalle"
import ProductoAlta from "../../Pages/ProductoAlta"
import ProductoEditar from "../../Pages/ProductoEditar"
function RoutesWeb() {
  
  return (
      <>
      <Route path="/" exact component={Home} />
      <Route path="/registro" exact component={Registro} />
      <Route path="/login" exact component={Login} />
      <Route path="/productos/:id" exact component={ProductoDetalle} />
      <Route path="/producto/alta" exact  component={ProductoAlta} />
      <Route path="/productos/editar/:id" exact  component={ProductoEditar} />
      </>
  );
}

export default RoutesWeb;

