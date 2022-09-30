import BotonMenos from '../multimedia/images/BotonMenos.png';
import BotonMas from '../multimedia/images/BotonMas.png';
import Components from './Components'
import {useState} from "react"




function ItemCount ({stock, initial, addOn}) {
    

    const [count, setCount] = useState(initial)
    return (
        <div className="ItemCount col-8">
            
            <img src={BotonMenos}  type="button" onClick={()=>{count > 0 && setCount(count-addOn)}} className={count===0?"botonItemCount opacity": "botonItemCount"} alt="boton-"/>                    
            
            <Components.p clase="textCount" text={count}/>

            <img src={BotonMas}  type="button" onClick={()=>{count < stock && setCount(count+addOn)}} className={count===stock?"botonItemCount opacity": "botonItemCount"} alt="boton+"  />
{/* 
            <Components.p text={"stock disponible: "}/>
            <Components.p text={stock}/> */}
            
            
        </div>
    )

}
export default ItemCount;


