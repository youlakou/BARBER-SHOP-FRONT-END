import React from 'react'
import Map from './map'
import About from './About'
import image4 from '../assests/aboutusbg.png';
import Team from '../conpments/barbers'
function aboutus() {
  return (
<>
<About/>
<div   style={{
      backgroundImage: `url(${image4})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
     
    }}>
<Team></Team>
   
  <Map  />


</div>

</>
    )
}

export default aboutus