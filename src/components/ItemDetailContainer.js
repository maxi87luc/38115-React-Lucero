import ItemDetail from './ItemItemDetail'
import fetchData from '../data/items';
import {useState , useEffect} from 'react'

function ItemDetailContainer ({greeting}) {
   
    

    console.log(state)
    return (
        <div className="ItemDetailContainer  ">
            
            <ItemDetail modelo={state}/>           
            
        </div> 
    )
}

export default ItemDetailContainer;