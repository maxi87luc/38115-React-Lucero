import {useState, useEffect , useContext} from "react"
import Contexts from '../Context/Contexts'
import { useNavigate } from "react-router-dom"


function FormCompra (){

    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState()
    const [email, setEmail] = useState()


    const context = useContext(Contexts.userContext)
    
    const navigate = useNavigate()
    

    useEffect(()=>{
        console.log(nombre, telefono, email)
        context.LogIn(nombre, telefono, email)
        if(nombre!==""){
            navigate("/cart")
        }
    }, [nombre, telefono, email])


    return (
        <div>
            <div className="d-grid container">
                <center>
                <form className="formulario" onSubmit={(e)=>{
                        e.preventDefault();
                        
                        console.log(e.target[0].value)
                        console.log(e.target[1].value)
                        console.log(e.target[2].value)


                        setNombre(e.target[0].value)
                        setTelefono(e.target[1].value)
                        setEmail(e.target[2].value)
                        
                        
                         

                    
                    
                    }}>       
                                    
                    <div className="row container">
                        <label className="row">
                            Nombre
                        </label>
                        <input className="row" type="text" name="nombre"/>
                    </div>
                    <div className="row container">
                        <label className="row">
                            Telefono
                        </label>
                        <input className="row" type="number" name="phone"/>
                    </div>
                    <div className="row container">
                        <label className="row">
                            E-mail
                        </label>
                        <input className="row"  name="email"/>
                    </div>
                    <button type="submit"  className="btn btn-primary">Submit</button>
                    
                </form>
                </center>
            </div>
        </div>
    )
}

export default FormCompra