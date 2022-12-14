import Contexts from '../Context/Contexts'
import React, {useContext} from 'react'
import BotonQuitar from '../multimedia/images/BotonQuitar.png'
import { useNavigate } from 'react-router-dom'
import {filterCollection, addSingleDoc, getSingleDoc, updateCurva} from '../utils/Firebase';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'




export default function Cart (){
    const context = useContext(Contexts.cartContext)
    const userContext = useContext(Contexts.userContext)
    const navigate = useNavigate()
    

    
  
   
    let items = context.state
    let totalCarrito = 0
    
    
    if(items.length){
        items.forEach((obj)=>{
            obj.curva.sort((a, b)=>{
            return a.talle - b.talle
            })
        })
        items.forEach((obj)=>{
            totalCarrito = totalCarrito + obj.total
        } )       
    }   
    
     
    let compra = {buyer: userContext.user, items: context.state, date: new Date(), total: totalCarrito}
   
        

        
    const handleBuy = ()=>{
        if(userContext.user.nombre&&context.state.length>0){
            context.finalizarCompra(compra, "compras")
            
            restarStock(compra.items)
            context.removeList()
            navigate("/")
            Swal.fire({
                title: 'Gracias por su compra',
                text: 'recibirá un e-mail con la factura',
                icon: 'success',
                confirmButtonText: 'Cool'
              })


        } else if(context.state.length>0) {
            navigate("/login")
        } 
            
    }

    const restarStock = (compra)=>{
        
        compra.forEach((item)=>{
            let docId = filterCollection('stock', ["modelo","==",item.modelo, "modelo","==",item.modelo])
            docId.then((res)=>{
 
                const id = res.docs.map((value)=>value.id)
                
                
                let stock = getSingleDoc('stock', id[0])
                let nuevoStockModelo = []
                stock.then((res)=>{
                    const curvaStock = res.data().curva
                   
                    item.curva.forEach((talle)=>{
                        
                        const talleStock = curvaStock.find((o)=> o.talle == talle.talle )
                        
                        nuevoStockModelo = [...nuevoStockModelo, {talle:  parseInt(talle.talle), cantidad: (talleStock.cantidad - talle.cantidad).toString()} ]
                        
                        
                        
                    })
                    curvaStock.forEach((talle)=>{
                        if (nuevoStockModelo.findIndex(o => o.talle == talle.talle)<0){
                            nuevoStockModelo = [...nuevoStockModelo, { talle: talle.talle, cantidad: talle.cantidad}]
                        } 
                    })
                


                   
                    updateCurva('stock', id[0], nuevoStockModelo)
                    
                    
                })
                

                

                
            })
            

        })

    }
    

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
                        <p className="col-2"><strong>${item.total}</strong> +IVA</p>
                    
                    
                    </li>)):<p>No hay elementos</p>}
                </ul>
                <div className="d-flex justify-content-between">
                    <button onClick={()=>context.removeList()} className="btn btn-secondary">Vaciar Carrito</button>
                    <h3><strong>Total: ${totalCarrito} +IVA</strong></h3>
                    <button onClick={()=>handleBuy()} className="btn btn-primary">Finalizar Compra</button>
                   
                </div>
            </div>
        </div> 
    )
}

 