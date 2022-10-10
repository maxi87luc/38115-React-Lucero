import BotonMenos from '../multimedia/images/BotonMenos.png';
import BotonMas from '../multimedia/images/BotonMas.png';
import Components from './Components'
import {useState} from "react"




function ItemCount ({stock, initial, onAdd, talle}) {
    
    const restarItem = (talle, count)=>{
        setCount(count-1)
        onAdd(talle, count-1)
    }
    const sumarItem = (talle, count)=>{
        setCount(count+1)
        onAdd(talle, count+1)
    }
 

    const [count, setCount] = useState(initial)
    return (
        <div key={talle} className="ItemCount col-8">
            
            <img src={BotonMenos} type="button" onClick={()=>{count > 0 && restarItem(talle, count) }} className={count===0?"botonItemCount opacity": "botonItemCount"} alt="boton-"/>                    
            
            <Components.p clase="textCount" text={count}/>

            <img src={BotonMas}  type="button" onClick={()=>{count < stock && sumarItem(talle, count)}} className={count===stock?"botonItemCount opacity": "botonItemCount"} alt="boton+"  />

            
            
        </div>
    )

}
export default ItemCount;


