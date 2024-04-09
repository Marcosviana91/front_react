import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './store'

import ChatPage from './Pages/Chat';
import Home from './Pages/Home';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
    <Provider store={store}>
      <Rotas />
    </Provider >
  );
}

export default App;
