import {useState, useEffect , useContext} from "react"
import Contexts from '../Context/Contexts'
import { useNavigate } from "react-router-dom"
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'




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
        <div className="LogInForm">
            <div className="d-grid container">
                <center>
                <form className="formulario" onSubmit={(e)=>{
                        e.preventDefault();
                        
                       


                        
                        if(e.target[2].value===e.target[3].value){
                            setNombre(e.target[0].value)
                            setTelefono(e.target[1].value)
                            setEmail(e.target[2].value)
                        } else {
                            Swal.fire({
                                title: 'Error!',
                                text: 'El e-mail ingresado no coincide',
                                icon: 'error',
                                confirmButtonText: 'Cool'
                              })
                        }
                        
                         

                    
                    
                    }}>       
                                    
                    <div className="row container">
                        <label className="row">
                            Nombre
                        </label>
                        <input className="row" type="text" name="nombre" required/>
                    </div>
                    <div className="row container">
                        <label className="row">
                            Telefono
                        </label>
                        <input className="row" type="number" name="phone" required/>
                    </div>
                    <div className="row container">
                        <label className="row">
                            E-mail
                        </label>
                        <input className="row" type="eMail" name="email" required/>
                    </div>
                    <div className="row container">
                        <label className="row">
                            Confirmar E-mail
                        </label>
                        <input className="row" type="eMail" name="email" required />
                    </div>
                    <button type="submit"  className="btn btn-primary">Submit</button>
                    
                </form>
                </center>
            </div>
        </div>
    )
}

export default FormCompra