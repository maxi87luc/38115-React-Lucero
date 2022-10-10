
import Carrousel from './Carousel';
import ItemCount from './ItemCount';
import {NavLink} from 'react-router-dom';
import {useState, useEffect} from "react"







function ItemDetail ({modelo}) {

    const [pedido, setPedido] = useState([])
    const [state, setState] = useState(0)

    const CambiarEstado = ()=>{
        setState(1)
        console.log(pedido)
    }
    

    const talles = modelo.talles.filter(talle=>talle!=="")
    const suelasPNG = require.context('../multimedia/images/suelasPNG') 
    const urlImage1 = suelasPNG(`./${ modelo.id }1.png`)
    const urlImage2 = suelasPNG(`./${ modelo.id }2.png`)  
      
        
   
    const sumarItem = (talle, cantidad) => {        

        
        const newItem = {talle: talle, cantidad: cantidad}   
        console.log(pedido)
        
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
                        
                        <center><button onClick={CambiarEstado} class={state===0?"btn btn-primary": "d-none"}>Agregar al Carrito</button></center>                                
                        <center><NavLink to="/cart"><button class={state===1?"btn btn-primary": "d-none"}>Comprar</button></NavLink></center>
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail;