
import Carrousel from './Carousel';
import ItemCount from './ItemCount';
import {NavLink} from 'react-router-dom';
import {useState, useContext} from "react"
import Contexts from '../Context/Contexts'







function ItemDetail ({modelo}) {
    console.log(modelo[0])
    console.log(modelo[1])

    

   

    const context = useContext(Contexts.cartContext)
    
    const [pedido, setPedido] = useState([])
    const [state, setState] = useState(0)
    const [nombreModelo] = useState(modelo[0].id)

    console.log(nombreModelo)
    console.log(pedido)
    
    

    

    

    const talles = modelo[0].talles.filter(talle=>talle!=="")
    const suelasPNG = require.context('../multimedia/images/suelasPNG') 
    const urlImage1 = suelasPNG(`./${ nombreModelo }1.png`)
    const urlImage2 = suelasPNG(`./${ nombreModelo }2.png`)  
      
    let totalPares   
    let suma = pedido.forEach((e)=>{
         totalPares = totalPares + e.cantidad
         return totalPares
    })
    const sumarItem = (talle, cantidad) => {        

        
        const newItem = {talle: talle, cantidad: cantidad}   
       
        
        if (pedido.find(o => o.talle === newItem.talle)) {
            const itemFind = pedido.find(o => o.talle === newItem.talle )
            itemFind.cantidad = cantidad
            
            

            
        } else {
            setPedido([...pedido, newItem])
            
        }
    } 

    

    return (
        <div className="row">
            <div className="col-6">
                <Carrousel url1={urlImage1} url2={urlImage2} id={modelo.id}/>
            </div>
            <div class="detail-body col-6 container d-grid">
                
                    <h2 className="row centrar">{modelo.id}</h2>  
                           
                    <p className="row centrar">                  
                        Material: {modelo.material}
                    </p>
                    <p className="row centrar">Curva: {modelo.genero} </p>
                     
                    
                    
                                   
                    <div>
                        
                        <ul className="tallesList container">            
                            {talles.map((talle)=><li className={state===0?"row talleList ":"d-none"}><p className="col-4 talleItemCount">{talle}</p> <ItemCount stock={10} onAdd={sumarItem} initial={0} talle={talle} /></li>)}
                        </ul> 
                        <center>
                        <h3>${modelo[1].precio}</h3>
                        <h3>${suma*modelo[1].precio}</h3>
                        
                        <button onClick={()=>context.addToCart(nombreModelo, pedido, setState)} className={state===0?"btn btn-primary":"d-none"}>Agregar a carrito</button>  
                        <NavLink to={"/cart"}><button  className={state===1?"btn btn-primary":"d-none"}>Comprar</button></NavLink>
                        <h3 className={state===2?"":"d-none"}>Este articulo ya esta en tu carrito</h3>
                        </center>
                                                    
                        
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail;

