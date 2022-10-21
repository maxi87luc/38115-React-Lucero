import React, {useState} from 'react'
import Contexts from '../Context/Contexts'

import { addSingleDoc } from '../utils/Firebase'

export default function CartContext({children}){
    const [state, setState] = useState([])
    
    const addToCart = (modelo, pedido, changeState, total)=>{    
        if (state.find(o=>o.modelo === modelo)) {   
            changeState(2)
        } else {
            
            const pedidoCompleto = {modelo: modelo, curva: pedido, total: total}
            setState([...state, pedidoCompleto])
            changeState(1)
        }
        

    }

    
    const deleteItem = (modelo)=>{
        const itemsFiltrado = state.filter((item)=> item.modelo!==modelo )
        console.log(itemsFiltrado)
        setState(itemsFiltrado)
    }

    const removeList = ()=>{
        setState([])
        console.log(state)
    }

    const finalizarCompra = (compra, coleccion)=>{
        addSingleDoc(compra, coleccion)
    }

  
    

    return (
        <Contexts.cartContext.Provider value={{state, addToCart, deleteItem, removeList, finalizarCompra}}>
            {children}
        </Contexts.cartContext.Provider>
    )

}


