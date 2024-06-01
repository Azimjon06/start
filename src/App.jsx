

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'

import Footer from './components/Footer/Footer'
import HEader from './components/Header/HEader'



function App() {


  return (
  <div className='App'>
    <HEader/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
  </div>
     
  )
}

export default App
