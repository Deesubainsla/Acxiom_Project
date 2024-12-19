import React from 'react'
import axios from 'axios';
import { mycontext } from '../context/Mycontext';

function Vender() {

    const {setuser} = mycontext();
    const logouthandler = async()=>{
        try {

            await axios.delete(`${import.meta.env.VITE_URL}/logout`,{withCredentials: true});
            setuser(null);
        } catch (error) {
            console.log(error.response.data.message);
        }

    }


  return <>
        <div className='h-full flex items-center justify-center '>

            <div className='h-[50%] w-full bg-blue-700 px-8 sm:px-12 py-20  flex flex-col justify-between shadow-xl'>


                <div className='bg-gray-400 text-center p-2 rounded border border-gray-500 '>Welcome <br/>Vender</div>

                <div className='flex justify-between'>

                    <button className='bg-gray-300 border border-gray-400 rounded-lg p-2'>Your Item</button>
                    <button className='bg-gray-300 border border-gray-400 rounded-lg p-2'>Add New Item</button>
                    <button className='bg-gray-300 border border-gray-400 rounded-lg p-2'>Transection</button>
                    <button onClick={logouthandler} className='bg-gray-300 border border-gray-400 rounded-lg p-2'>Logout</button>

                </div>

            </div>

        </div>
  </>
}

export default Vender