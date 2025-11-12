import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login';
import Home from './pages/Home';
import Register from './pages/Register/Register';
import Profile from './pages/profile/Profile';
import Navbar from './components/navbar/Navbar'
import Reservations from './pages/Reservations/Reservations';

function AppContent() {

  const location = useLocation();

  const hideNavbar = location.pathname === "/login" || location.pathname === "/register"

return (
    <div className='main'>
      {!hideNavbar && (
        <div className='navbar'>
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/reservations" element={<Reservations/>}/>
      </Routes>
    </div>
  );
}

export default function App(){
  return(
    <Router>
      <AppContent/>
    </Router>
  );
}
