// import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Body from './components/Body/Body'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Servics from './components/Servicess/Servics'
import Connect from './components/Connect/Connect'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <div className=''>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Body></Body>}></Route>
          <Route path='/home' element={<Body></Body>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/services' element={<Servics></Servics>}></Route>
          <Route path='/connect' element={<Connect></Connect>}></Route>

        </Routes>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
