import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Welcome from './pages/Welcome'
import './App.css'
import Admin from './pages/Admin'
import User from './pages/User'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/sakshamverma712' element={<Admin/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
