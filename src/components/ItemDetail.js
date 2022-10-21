
import Carrousel from './Carousel';
import ItemCount from './ItemCount';
import {NavLink} from 'react-router-dom';
import {useState, useContext} from "react"
import Contexts from '../Context/Contexts'







function ItemDetail ({modelo}) {
    
    

   

    const context = useContext(Contexts.cartContext)
    
    const [pedido, setPedido] = useState([])
    const [state, setState] = useState(0)
    const [nombreModelo] = useState(modelo[0].id)

    
    
    let suma = 0;
    pedido.forEach((obj)=>{
        
        suma = suma + obj.cantidad;
      
    })
    
    console.log(suma)
    let precio

    if(suma<25){
        precio = modelo[1].precio

    } else if(suma>=25 && suma<50 ){
        precio = parseInt((modelo[1].precio)*0.95)
    } else if (suma>=50){
        precio = parseInt((modelo[1].precio)*0.90)
    }
    let total = suma*precio

    
    

    const talles = modelo[0].talles.filter(talle=>talle!=="")
    const suelasPNG = require.context('../multimedia/images/suelasPNG') 
    const urlImage1 = suelasPNG(`./${ nombreModelo }1.png`)
    const urlImage2 = suelasPNG(`./${ nombreModelo }2.png`)  
      
    
    const sumarItem = (talle, cantidad) => {        

        
        const newItem = {talle: talle, cantidad: cantidad}   
       
        
        if (pedido.find(o => o.talle === newItem.talle)) {
            const itemFind = pedido.find(o => o.talle === newItem.talle )
            itemFind.cantidad = cantidad
            setPedido([...pedido])
            
            

            
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
                        <h3>${precio}</h3>
                        <h3>${parseInt(suma*precio)}</h3>
                        
                        <button onClick={()=>suma>0&&context.addToCart(nombreModelo, pedido, setState, total)} className={state===0?"btn btn-primary":"d-none"}>Agregar a carrito</button>  
                        <NavLink to={"/cart"}><button  className={state===1?"btn btn-primary":"d-none"}>Ir al Carrito</button></NavLink>
                        <h3 className={state===2?"":"d-none"}>Este articulo ya esta en tu carrito</h3>
                        </center>
                                                    
                        
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail;

