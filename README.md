# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Skeleton

The [MUI](https://mui.com/getting-started/installation/) dependency is used to generate a skeleton component <br/>that is rendered while the content is loading


In this projecte the Skeleton component works with three properties and its call is <UseSkeleton/>

```javascript
<UseSkeleton
type = 'text' //By default is null and its a rectangle
width = {50} //By default is 50px
height = {20} //By default is 20px
/>
```

Documentation of Skeleton component:
[https://mui.com/components/skeleton/](https://mui.com/components/skeleton/)

To install [MUI](https://mui.com/getting-started/installation/) dependency use:

```bash
// with npm
npm install @mui/material @emotion/react @emotion/styled

// with yarn
yarn add @mui/material @emotion/react @emotion/styled
```

## _**`Shared components`**_

### `Spinner`

El spinner es un componente SVG que puede ser reutilizado en cualquier parte del código.<br />
La dependencia react-loader-spinner fue instalada para facilitar la utilización del mismo,<br />
y poder acceder a diferentes diseños.<br />
Documentación oficial: https://npm.runkit.com/react-loader-spinner<br />

```javascript
import Spinner from "../shared/Spinner";

const FormLogin = () => {
  return(
    { isLoading ? <Spinner /> : <p>Logueado!!</p>}
  );
};

export default FormLogin;
```
