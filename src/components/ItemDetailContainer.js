
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
   
    return (
        <div className="ItemDetailContainer d-grid  ">
            {state?<ItemDetail modelo={state}/>:<NoHayElementos/>}
            
            
            
        </div> 
    )
}

export default ItemDetailContainer;