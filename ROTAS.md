# CRIANDO ROTAS

```TSX
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/chat" element={<ChatPage />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}

        {/* Parametro no Path :NOME_DA_VARIAVEL */}
        {/* <Route path="/product/:id" element={<Produtos />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <Rotas />
  );
}
```

## Usando Navegação com React Router DOM
Utilizando a navegação 'instantânea' do React
> instale o react-router-dom \
> ````npm i --save react-router-dom````
### Criando as rotas
```TypeScript
import { Provider } from 'react-redux'
// import createBrowserRouter, RouterProvider do módulo 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './store'

// crie e importe paginas react para cada rota
import Home from './pages/Home'
import Create from './pages/Create'

import EstiloGlobal from './styles'

// crie uma constante que inicializa createBrowserRouter() passando uma liste de objetos como argumento
const routes = createBrowserRouter([
  // cada objeto tem um path, que é a rota
  // e um elemento, que é a pagina criada
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Create />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      //crie uma tag RouterProvider passando a constante com lista de rotas como argumento para router
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
```
### Navegando pelas rotas
> para navegar pelas rotas do react, usaremos uma tag do tipo Link, invés de button

No componente que realizará a navegação:
```TypeScript
import { styled } from 'styled-components'
// importe o componente Link
import { Link } from 'react-router-dom'

// crie um componente do tipo Link, invés de button
export const StyledButtonCreateContact = styled(Link)`
  padding: 8px;
  color: white;
  font-weight: 700;
  background-color: #077;
  border-radius: 8px;
  cursor: pointer;
`
```
A tag de chamada do componente deverá ter o parâmetro **to={'/'}**, com uma string indicando a rota desejada (neste caso o *root* '/' )

> no arquivo do container:

```TypeScript
// importe useNavigate e o componente Link criado
import { useNavigate } from 'react-router-dom'
import { StyledButtonLink } from '../../components/Buttons/style'

export const NavBar = () => {
  <StyledButtonLink to={'/'}>Início</StyledButtonLink>
}
```

#### Navegando pelas rotas com Ancoras
> instale o pacote:  \
> `npm install --save react-router-hash-link`  \
> `npm install --save-dev @types/react-router-hash-link`

No lugar de Link usaremos `import { HashLink } from 'react-router-hash-link'`
