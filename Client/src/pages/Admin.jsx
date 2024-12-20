import React from 'react'
import axios from 'axios';
import { mycontext } from '../context/Mycontext';
import toast from 'react-hot-toast';

function Admin() {

    const {setuser} = mycontext();
    const logouthandler = async()=>{
        try {

            await axios.delete(`${import.meta.env.VITE_URL}/logout`,{withCredentials: true});
            setuser(null);
            toast.success("Logout successful")
        } catch (error) {
            toast.error(error.response.data.message);
        }

    }


    return <>
        <div className='h-full flex items-center justify-center '>

            <div className='h-[50%] w-full bg-gray-300 px-8 sm:px-12 py-24  flex flex-col justify-between shadow-xl'>


                <div className='bg-blue-700 text-center p-2 text-white rounded border border-black '>Welcome Admin</div>

                <div className='flex justify-between'>

                    <button className='bg-blue-500 border text-white border-gray-400 rounded-lg p-2'>Maintain User</button>
                    <button className='bg-blue-500 border text-white border-gray-400 rounded-lg p-2'>Maintain Vender</button>
                    <button onClick={logouthandler} className='bg-blue-500 border text-white border-gray-400 rounded-lg p-2'>Logout</button>

                </div>

               

            </div>

        </div>
    </>
}

export default Admin