import './App.css';
import Auth from './pages/Auth/Auth';
import Home from './pages/home/Home';
import Profile from './pages/Profile/Profile';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Chat from './pages/Chat/Chat';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import AdminHome from './pages/AdminHome/AdminHome'

function App() {
  const user = useSelector((state) => state.authReducer.authData)
  const admin = useSelector((state) =>state.adminReducer.adminData)
  return (
    <div className="App">
      <div className='blur' style={{ top: '--18%', right: '0' }}></div>
      <div className='blur' style={{ top: '36%', left: '-8rem' }}></div>
      <Routes>
       
        
        <Route path='/' element={user ? <Navigate to="home" /> : <Navigate to="auth" />} />
        <Route path='/home' element={user ? <Home/> : <Navigate to = '../auth'/>}/>
        <Route path='/auth' element={user ? <Navigate to = '../home'/> : <Signup/>}/>
        <Route path='/login'element={user?<Navigate to ='../home'/>:<Login/>}/>
        <Route path ='/adminhome' element={admin ? <AdminHome/>: <Navigate to="/admin"/>}/>
        <Route path='/admin' element={admin ?<Navigate to="/adminhome"/>:<AdminLogin/>}/>
        {/* <Route path='/admin' element={<AdminLogin/> } /> */}

        {/* <Route path='/profile' element={<Profile/> } /> */}
        <Route path='/profile/:id' element = {user? <Profile/> : <Navigate to="../auth"/>}/>
        <Route path='/chat' element={user ? <Chat/> : <Navigate to ="../auth" />} />
      </Routes>
    </div>
  );
}

export default App;
