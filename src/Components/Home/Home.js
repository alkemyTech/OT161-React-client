import React from 'react'
import Novedades from './Novedades'
import Slider from './Slider'

const Home = () => {
  return (
    <>
        {/* Este texto viene del endpoint de datos públicos */}
       <h1>Texto de Bienvenida</h1>
       <div>
           <Slider />
       </div>
       <div>
           <Novedades />
       </div>
    </>
  )
}

export default Home