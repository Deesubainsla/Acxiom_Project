import React,{ useState,useEffect } from 'react'
import Login from './pages/Login'
import Vender from './pages/Vender'
import User from './pages/User'
import Admin from './pages/Admin'
import Notfound from './pages/Notfound'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { mycontext } from './context/Mycontext'
import axios from 'axios'


function App() {

  const {user,setuser} = mycontext();

  useEffect(() => {
   (async()=>{
    try {
      const res = await axios.get(`${import.meta.env.VITE_URL}/getmyprofile`,{withCredentials:true});

      setuser(res.data.user);
    } catch (error) {
      console.log(error.response.data.message);
    }

   })()
  }, [])
  

  const Authentication = ({ Component,role }) => {
    // console.log("in Authentication with user  ",user);
    // const samerole = (user?.role == {Component}.toLowerCase());
    // return (!user && samerole ) ? <Login /> : <Component />;

    if(user){
      const samerole = (user.role == role);
      return samerole? <Component/> : <Login/>
    }
    else{
      return <Login/>
    }
  }


  return <>
    <div className='h-screen'>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Authentication Component={Home} role={"home"} />} />
            <Route path='/admin' element={<Authentication Component={Admin} role={"admin"} />} />
            <Route path='/user' element={<Authentication Component={User} role={"user"}/>} />
            <Route path='/vender' element={<Authentication Component={Vender} role={"vender"} />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
      </BrowserRouter>
    </div>

  </>
}

export default App
