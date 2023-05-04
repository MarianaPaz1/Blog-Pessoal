import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import CadastroUsuario from './pages/cadastrarUsuario/CadastroUsuario';
import './App.css'
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagem/listaPostagem/ListaPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagem/deletarPost/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import CadastroPost from './components/postagem/cadastroPost/CadastroPostagem';
import { Provider } from 'react-redux';
import store from './store/store';



function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
           <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/tema" element={<ListaTema />} />
            <Route path="/post" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
          </Routes>
        </div>
        <Footer />
    </BrowserRouter >
    </Provider>
  );
}

export default App;

