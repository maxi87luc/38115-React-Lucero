

import {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import NoHayElementos from './NoHayElementos';
import {filterCollection} from '../utils/Firebase';


function ItemDetailContainer () {
   
    const [state, setState] = useState()
    const [price, setPrice] = useState()
    

    const {id} = useParams()
    
    useEffect(()=>{
        const priceRes = filterCollection("precios",["modelo","==",id , "modelo","==",id])
        priceRes.then((res)=>{
            
            const arr = res.docs.map((value)=>value.data())
            console.log(arr[0])
            setPrice(arr[0]);
        })  
      
        const res = filterCollection("items",["id","==",id, "id","==",id])
        res.then((res)=>{
            
            const arr = res.docs.map((value)=>value.data())
            console.log(arr[0])
            setState(arr[0]);
        })
     
       
            


        
        
    },[])
   
    console.log(state)
    console.log(price)
    
   
    return (
        <div className="ItemDetailContainer d-grid  ">
            {state?<ItemDetail modelo={[state,price]}/>:<NoHayElementos/>}          
            
            
        </div> 
    )
}

export default ItemDetailContainer;