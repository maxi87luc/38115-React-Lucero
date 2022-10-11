import Contexts from '../Context/Contexts'
import React, {useContext} from 'react'
import BotonQuitar from '../multimedia/images/BotonQuitar.png'


export default function Cart (){
    const context = useContext(Contexts.cartContext)
    
    let items = context.state
    console.log(items)


    return (
        <div className="cartContainer">
            <div className="cart container">
                
                <ul>
                    {items.length > 0 ? (items.map((item) => <li className="CartItem row">
                        <h3 className="col-3">{item.modelo}</h3>
                        <table className="col-6">
                            <tr>
                                {item.curva.map((talle)=> <td><strong>{talle.talle}</strong></td>)}
                            </tr>
                            <tr>
                                {item.curva.map((talle)=> <td>{talle.cantidad}</td>)}
                            </tr>
                        </table>
                        <img src={BotonQuitar} id={item.modelo} type="button" onClick={()=>context.deleteItem(item.modelo)} className="BotonQuitar col-1" alt=""/>
                        <h4 className="col-2">${item.total}</h4>
                    
                    
                    </li>)):<p>No hay elementos</p>}
                </ul>
                <button onClick={()=>context.removeList()} className="btn btn-primary">Vaciar Carrito</button>
            </div>
        </div> 
    )
}

