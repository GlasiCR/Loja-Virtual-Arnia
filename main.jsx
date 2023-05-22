import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import CatalogoFilme from './components/CatalogoFilme/CatalogoFilme'
//import HeaderLoja from './components/HeaderLoja/Index'
//import IndexProduto from './components/IndexProduto'
import App from './App'
import { GlobalStyle } from './theme/GlobalStyle.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
