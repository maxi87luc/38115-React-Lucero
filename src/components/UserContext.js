import React, {useState} from 'react'
import Contexts from '../Context/Contexts'

export default function UserContext({children}){
    const [user, setUser] = useState({})
    
    const LogIn = (nombre, telefono, email)=>{
        setUser({nombre: nombre, telefono: telefono, email: email})
    }
    

    return (
        <Contexts.userContext.Provider value={{user, LogIn}}>
            {children}
        </Contexts.userContext.Provider>
    )

}


