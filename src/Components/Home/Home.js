import React from 'react'
import Novedades from './Novedades'
import Carrousel from '../../Components/Slides/Carrousel'
import LayoutPublic from '../LayoutPublic/LayoutPublic'

const Home = () => {
  return (
    <>
    <LayoutPublic>
        {/* Este texto viene del endpoint de datos públicos */}
       <h1>Texto de Bienvenida</h1>
       <div>
           <Carrousel />
       </div>
       <div>
           <Novedades />
       </div>
       </LayoutPublic>
    </>
  )
}

export default Home