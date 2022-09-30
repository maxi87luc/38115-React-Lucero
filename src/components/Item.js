
import Carrousel from './Carrousel'
import {NavLink} from 'react-router-dom'

function Item ({modelo}){

    
    const suelasPNG = require.context('../multimedia/images/suelasPNG') 
    
    const urlImage1 = suelasPNG(`./${ modelo.id }1.png`)
    const urlImage2 = suelasPNG(`./${ modelo.id }2.png`)

    
    



    return (
        <li className="card col-5" key={modelo.id} style={{ width: "18rem"}}>
            <Carrousel url1={urlImage1} url2={urlImage2} id={modelo.id}/>
            <div class="card-body">
                <h5 className="card-title">{modelo.id}</h5>  
                <p>                  
                   Material: {modelo.material}
                </p>
                <p>Curva: {modelo.genero} </p>             



                
                             
                <NavLink to={`/${modelo.id}`}><button class="btn btn-primary">Armar Pedido</button></NavLink>
            </div>
        </li>
    )
}

export default Item


