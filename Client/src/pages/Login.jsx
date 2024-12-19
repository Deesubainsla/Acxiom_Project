import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { register:register1, handleSubmit:handleSubmit1, formState: { errors:errors1 } } = useForm();

    const [login, setlogin] = useState(true);
    // const [role, setrole] = useState("");

    const roleref = useRef(null);
    roleref.current = "";
    // useEffect(()=>{
    //     roleref.current = "";
    // },[])


    const handlelogin = async(data) => {
        const info = {
            email: data.loginemail,
            password: data.loginpassword,
            role: data.role
        }
        try {
            const res = await axios.post(`${import.meta.env.VITE_SERVER}/login`,info,
                {withCredentials: true}
            )
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    const handlesignin = async(data) => {
        console.log(data);
    }

    return <>

        {login ?
            //login
            <>
                <div className='h-full flex justify-center items-center'>
                    <div className='w-[85%] border shadow-lg rounded-lg space-y-6 bg-gray-300 md:w-[60%] p-8'>

                        <div className='p-2 border border-blue-500 text-center bg-blue-400'>Event Management System</div>

                        <form className='space-y-4' onSubmit={handleSubmit(handlelogin)}>

                            <div className='flex '>
                                <span className='w-[30%] sm:w-[40%]'>
                                    Email:
                                </span>
                                <input className='bg-blue-300 w-full rounded border-blue-400 border' type="text" {...register('loginemail', { required: true })} />
                            </div>
                            {errors.loginemail && <span className='text-red-600 text-sm'>This field is required</span>}

                            <div className='flex '>
                                <span className='w-[30%] sm:w-[40%]'>
                                    Password:
                                </span>
                                <input className='bg-blue-300 w-full rounded border-blue-400 border' type="password" {...register("loginpassword", { required: true })} />
                            </div>
                            {errors.loginpassword && <span className='text-red-600 text-sm'>This field is required</span>}

                            <div className='flex '>
                                <span className='w-[30%] sm:w-[40%]'>
                                    Role:
                                </span>
                                {/* <input className='bg-blue-300 w-full rounded border-blue-400 border' type="" /> */}
                                <select className='bg-blue-300 w-full rounded border-blue-400 border' defaultValue="" name="Role" {...register("loginrole", { required: "This is required" })} >
                                    <option value="" disabled>Select a Role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Vender">Vender</option>
                                    <option value="User">User</option>

                                </select>
                                {/* Problem faced due to register first in select */}
                            </div>
                            {errors.loginrole && <span className='text-red-600 text-sm'>This field is required</span>}




                            <button type='submit' className='w-full p-1 bg-gray-500'>Login</button>

                        </form>


                        {login ?
                            <div
                                className='text-center'>If not register? <span onClick={() => setlogin(prev => !prev)} className='text-blue-800 cursor-pointer'>Signup</span></div> :
                            <div
                                className='text-center'>If already register? <span onClick={() => setlogin(prev => !prev)} className='text-blue-800 cursor-pointer'>Login</span></div>
                        }


                    </div>
                </div>
            </>
            :
            //signup
            <>

                <div className='h-full flex justify-center items-center'>
                    <div className='w-[85%] border shadow-lg rounded-lg space-y-6 bg-gray-300 md:w-[60%] p-8'>

                        <div className='p-2 border border-blue-500 text-center bg-blue-400'>Event Management System</div>

                        <form className='space-y-4' onSubmit={handleSubmit1(handlesignin)}>

                            <div className='flex '>
                                <span className='w-[30%] sm:w-[40%]'>
                                    Name:
                                </span>
                                <input className='bg-blue-300 w-full rounded border-blue-400 border' type="text" {...register1("signinname",{required:true})} />
                            </div>
                            {errors1.signinname && <span className='text-red-600 text-sm'>This field is required</span>}

                            <div className='flex '>
                                <span className='w-[30%] sm:w-[40%]'>
                                    Email:
                                </span>
                                <input className='bg-blue-300 w-full rounded border-blue-400 border' type="text" {...register1("signinemail",{required: true})} />
                            </div>
                            {errors1.signinemail && <span className='text-red-600 text-sm'>This field is required</span>}


                            <div className='flex '>
                                <span className='w-[30%] sm:w-[40%]'>
                                    Password:
                                </span>
                                <input className='bg-blue-300 w-full rounded border-blue-400 border' type="password" {...register1("signinpassword",{required:true})} />
                            </div>
                            {errors1.signinpassword && <span className='text-red-600 text-sm'>This field is required</span>}

                            <div className='flex '>
                                <span className='w-[30%] sm:w-[40%]'>
                                    Role:
                                </span>
                                {/* <input className='bg-blue-300 w-full rounded border-blue-400 border' type="" /> */}
                                <select className='bg-blue-300 w-full rounded border-blue-400 border' defaultValue="" name="signinrole" {...register1("signinrole",{required: true})} >
                                    <option value="" disabled>Select a Role</option>
                                    <option value="User">User</option>
                                    <option value="Vender">Vender</option>
                                </select>
                            </div>
                            {errors1.signinrole && <span className='text-red-600 text-sm'>This field is required</span>}

                            <div className='flex '>
                                <span className='w-[30%] sm:w-[40%]'>
                                    Vender Category:
                                </span>
                                {/* <input className='bg-blue-300 w-full rounded border-blue-400 border' type="" /> */}
                                <select className='bg-blue-300 w-full rounded border-blue-400 border' defaultValue="" name="category" {...register1("signincategory")} >
                                    <option value="" disabled>Select a Category</option>
                                    <option value="Catering">Catering</option>
                                    <option value="Florist">Florist</option>
                                    <option value="Decoration">Decoration</option>
                                    <option value="Lighting">Lighting</option>
                                </select>
                            </div>
                            {/* {errors.signincategory && <span className='text-red-600 text-sm'>This field is required</span>} */}

                            <button type='submit' className='w-full p-1 bg-gray-500'>Signup</button>

                        </form>


                        {login ?
                            <div
                                className='text-center'>If not register? <span onClick={() => setlogin(prev => !prev)} className='text-blue-800 cursor-pointer'>Signup</span></div> :
                            <div
                                className='text-center'>If already register? <span onClick={() => setlogin(prev => !prev)} className='text-blue-800 cursor-pointer'>Login</span></div>
                        }


                    </div>
                </div>

            </>}


    </>
}

export default Login



