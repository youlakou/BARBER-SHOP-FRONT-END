import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../conpments/Header'
import '../App.css';

import Barbers from '../conpments/barbers'
import Serv from '../conpments/services';
import AboutUs from '../conpments/About';
import Map from '../conpments/map'
import Product from '../conpments/product'
import backgroundImage from '../assests/aboutusbg.png';

function HOME() {
  return (<>
 
 
  <Header />
  
  <AboutUs />
  <Serv />
  <Barbers />
  <Product />
 <div style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   
    }} >
  <Map/>
  </div>
 

  
  
    </>
  )
}

export default HOME