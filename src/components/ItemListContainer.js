import ItemList from './ItemList'


import {useState , useEffect} from 'react'
import NoHayElementos from './NoHayElementos';
import { useParams } from 'react-router-dom';
import { filterCollection} from '../utils/Firebase'

function ItemListContainer () {
    let {material, genero} = useParams();


    
    



    const [state, setState] = useState([])
    useEffect(()=>{
        const res = filterCollection("items",["material","==",material, "genero","==",genero])
        res.then((res)=>{
            console.log(res)
            console.log(material + " " + genero)
            setState(res.docs.map((value)=>value.data()));
        })

        

        

        
       
        
        
        
    },[ material])



    
    
   
    

    
    return (
        <div className="ItemListContainer">            
            {state.length>0?<ItemList items={state}/>:<NoHayElementos/>}             
        </div> 
    )
}

export default ItemListContainer;