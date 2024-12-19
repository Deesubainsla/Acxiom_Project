import React,{createContext, useContext, useState} from "react";

const Mycontext = createContext();

const mycontextprovider = ({children})=>{

    const [user, setuser] = useState(null);

    return <Mycontext.Provider value={{user, setuser}}>

        {children}
    </Mycontext.Provider>
}

const mycontext = ()=> useContext(Mycontext);
export {mycontext, mycontextprovider}