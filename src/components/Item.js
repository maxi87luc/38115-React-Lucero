
import Carousel from './Carousel'
import {NavLink} from 'react-router-dom'

function Item ({modelo}){

    
    const suelasPNG = require.context('../multimedia/images/suelasPNG') 
    
    const urlImage1 = suelasPNG(`./${ modelo.id }1.png`)
    const urlImage2 = suelasPNG(`./${ modelo.id }2.png`)

    
    



    return (
        <li className="card col-5" key={modelo.id} style={{ width: "18rem"}}>
            <center>
                <Carousel url1={urlImage1} url2={urlImage2} id={modelo.id}/>
                <div class="card-body ">
                    <h5 className="card-title">{modelo.id}</h5>  
                    <p>                  
                    Material: {modelo.material}
                    </p>
                    <p>Curva: {modelo.genero} </p>           



                    
                                
                    <NavLink to={`/item/${modelo.id}`}><button class="btn btn-primary">Armar Pedido</button></NavLink>
                </div>
            </center>
        </li>
    )
}

export default Item


