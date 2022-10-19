
import {fetchItemData} from '../data/items';
import {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import NoHayElementos from './NoHayElementos';
import fetchPriceData from '../data/precios';


function ItemDetailContainer () {
   
    const [state, setState] = useState()
    const [price, setPrice] = useState()
    

    const {id} = useParams()
    console.log(id)
    
    useEffect(()=>{




        fetchItemData(id).then((value)=>{ 
            setState(value);    
            console.log(value)    
            


        })
        fetchPriceData(id).then((value)=>{ 
            setPrice(value)
                
            })
        console.log("antes de pricedata: "+ state)
        
    })
   
    console.log(state)
    console.log(price)
    
   
    return (
        <div className="ItemDetailContainer d-grid  ">
            {state?<ItemDetail modelo={[state,price]}/>:<NoHayElementos/>}          
            
            
        </div> 
    )
}

export default ItemDetailContainer;