import React from 'react'
import Novedades from './Novedades'
import Carrousel from '../../Components/Slides/Carrousel'

const Home = () => {
  return (
    <>
        {/* Este texto viene del endpoint de datos públicos */}
       <h1>Texto de Bienvenida</h1>
       <div>
           <Carrousel />
       </div>
       <div>
           <Novedades />
       </div>
    </>
  )
}

export default Home