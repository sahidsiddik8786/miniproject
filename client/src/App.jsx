import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from  './Login'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './home';
//import Navbar  from './components/Navbar'
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/' element={<Home />}></Route>

        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App;
