import React from 'react'
import ShowTitle from '../../shared/ShowTitle'
import Novedades from './Novedades'
import Slider from './Slider'

const Home = () => {
  return (
    <>
        {/* Este texto viene del endpoint de datos públicos */}
       <ShowTitle patchData={{title: 'Texto de Bienvenida'}}/>
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