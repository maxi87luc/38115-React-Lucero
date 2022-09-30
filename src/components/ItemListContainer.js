import ItemList from './ItemList'
import {fetchData} from '../data/items';
import {useState , useEffect} from 'react'
import NoHayElementos from './NoHayElementos';

function ItemListContainer ({greeting}) {
    let material = greeting.material
    let genero = greeting.genero

    const [state, setState] = useState([])
    useEffect(()=>{
        fetchData(material, genero).then((value)=>{ 
            setState(value)
        })
    })
    console.log(state)
    
    

    
    return (
        <div className="ItemListContainer">            
            {state.length>0?<ItemList items={state}/>:<NoHayElementos/>}             
        </div> 
    )
}

export default ItemListContainer;