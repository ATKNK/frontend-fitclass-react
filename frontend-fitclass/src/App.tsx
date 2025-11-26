import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login';
import Home from './pages/Academias/Academias';
import Register from './pages/Register/Register';
import Profile from './pages/profile/Profile';
import Navbar from './components/navbar/Navbar'
import Reservations from './pages/Reservations/Reservations';
import Classes from './pages/Classes/Classes';
import Academias from './pages/Academias/Academias';
import Manage from './pages/Manage/Manage';
import PrivateRoute from './utils/api/PrivateRoute';

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
        <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/reservations" element={<PrivateRoute><Reservations/></PrivateRoute>}/>
        <Route path="/classes" element={<PrivateRoute><Classes/></PrivateRoute>}/>
        <Route path="/gyms" element={<PrivateRoute><Academias/></PrivateRoute>}/>
        <Route path="/manage" element={<PrivateRoute allowedRoles={["GYM_OWNER", "PERSONAL"]}><Manage/></PrivateRoute>}/>
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
