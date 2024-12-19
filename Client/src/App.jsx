import { useState } from 'react'
import Login from './pages/Login'
import Vender from './pages/Vender'
import User from './pages/User'
import Admin from './pages/Admin'
import Notfound from './pages/Notfound'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  const user = true;

  const Authentication = ({ Component }) => {
    // console.log("in Authentication with user  ",user);
    
    return (!user) ? <Login /> : <Component />;
  }


  return <>
    <div className='h-screen'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Authentication Component={Home} />} />
            <Route path='/admin' element={<Authentication Component={Admin} />} />
            <Route path='/user' element={<Authentication Component={User} />} />
            <Route path='/vender' element={<Authentication Component={Vender} />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
      </BrowserRouter>
    </div>

  </>
}

export default App
