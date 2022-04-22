import React from 'react'
import ShowTitle from '../../shared/ShowTitle'

const PageNotFound = () => {
  return (
    <>
        <ShowTitle patchData={{title: "404 | Page Not Found"}}/>
        <p>La ruta a la que intenta ingresar no se encuentra registrada</p>
    </>
  )
}

export default PageNotFound