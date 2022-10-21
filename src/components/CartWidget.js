import cartIcon from '../multimedia/images/cartImage.png';
import Contexts from '../Context/Contexts'
import React, {useContext} from 'react'

function CartWidget () {
    
    const context = useContext(Contexts.cartContext)
    const items = context.state
    console.log(items)
    return (
        <div className="cartLogo d-flex">
                {items.length>0&&<p className="cartCount"><strong>{items.length}</strong></p>}  
                <img src={cartIcon} className="cartIcon" alt="Icono Carrito" />
                
                
                
            
        </div>
    )
}

export default CartWidget;



 