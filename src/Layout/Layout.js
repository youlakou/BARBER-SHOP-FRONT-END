import react from"react";
import Header from '../conpments/Nav'
import Fotter from '../conpments/fotter'
import Routers from '../router/route'
import './layout.css';



const Layout= () =>{
    return<>
    <Header></Header>
    <Routers></Routers>
    <Fotter></Fotter>
    </>
};

export default Layout