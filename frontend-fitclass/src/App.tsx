import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login';
import Home from './pages/Home';
import Register from './pages/Register/Register';
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <Router>
      <div className='main'>
        <div className='navbar'>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
  )
}

export default App
