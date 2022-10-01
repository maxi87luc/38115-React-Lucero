
import {fetchItemData} from '../data/items';
import {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import NoHayElementos from './NoHayElementos';

function ItemDetailContainer () {
   
    const [state, setState] = useState()

    const {id} = useParams()
    
    useEffect(()=>{
        fetchItemData(id).then((value)=>{ 
            setState(value)
        })
    })
    console.log("url params "+id)
    console.log("estado " + state)
    return (
        <div className="ItemDetailContainer d-grid  ">
            {state?<ItemDetail modelo={state}/>:<NoHayElementos/>}
            
            {/* <ItemDetail modelo={state}/>            */}
            
        </div> 
    )
}

export default ItemDetailContainer;