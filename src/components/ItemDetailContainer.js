

import {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import NoHayElementos from './NoHayElementos';
import {filterCollection} from '../utils/Firebase';


function ItemDetailContainer () {
   
    const [state, setState] = useState()
    const [price, setPrice] = useState()
    const [stock, setStock] = useState()
    

    const {id} = useParams()
    
    useEffect(()=>{
        const priceRes = filterCollection("precios",["modelo","==",id , "modelo","==",id])
        priceRes.then((res)=>{
            
            const arr = res.docs.map((value)=>value.data())
            
            setPrice(arr[0]);
        })  

        const stockRes = filterCollection("stock",["modelo","==",id, "modelo","==",id])
        stockRes.then((res)=>{
 
            const arr = res.docs.map((value)=>value.data())
           
            setStock(arr[0]);
        })
      
        const res = filterCollection("items",["id","==",id, "id","==",id])
        res.then((res)=>{
            
            const arr = res.docs.map((value)=>value.data())
            
            setState(arr[0]);
        })

        
        
     
       
            


        
        
    },[])


   
    
   
    return (
        <div className="ItemDetailContainer d-grid  ">
            {state?<ItemDetail modelo={[state,price,stock]}/>:<NoHayElementos/>}              
        </div> 
    )
}

export default ItemDetailContainer;