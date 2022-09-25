import ItemList from './ItemList'
import fetchData from '../data/items';
import {useState , useEffect} from 'react'

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
        <div className="ItemListContainer  ">
            
            <ItemList items={state} />           
            
        </div> 
    )
}

export default ItemListContainer;