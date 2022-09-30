import {fullData} from '../data/items';
import {useState , useEffect} from 'react'
import ItemList from './ItemList'


function Home (){
    const [state, setState] = useState([])
    useEffect(()=>{
        fullData().then((value)=>{ 
            setState(value)
            console.log(value)
        })
    })
    console.log(state)

    return (
        <div className="ItemListContainer">            
            <ItemList items={state}/>            
        </div>
    )
}

export default Home