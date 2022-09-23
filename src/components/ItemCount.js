import BotonMenos from '../multimedia/images/BotonMenos.png';
import BotonMas from '../multimedia/images/BotonMas.png';
import Components from './Components'
import {useState} from "react"




function ItemCount ({stock}) {
    

    const [count, setCount] = useState(0)
    return (
        <div className="ItemCount">
            
            <img src={BotonMenos} id="botonMenos" type="button" onClick={()=>{count > 0 && setCount(count-1)}} className={count===0?"botonItemCount opacity": "botonItemCount"} alt="boton-"/>                    
            
            <Components.p clase="textCount" text={count}/>

            <img src={BotonMas} id="botonMas" type="button" onClick={()=>{count < stock && setCount(count+1)}} className={count===stock?"botonItemCount opacity": "botonItemCount"} alt="boton+"  />

            <Components.p text={"stock disponible: "}/>
            <Components.p text={stock}/>
            
            
        </div>
    )

}
export default ItemCount;


