import ItemList from './ItemList'
import '../data/items'
import items from '../data/items';
function ItemListContainer ({greeting}) {
    let material = greeting.material
    let genero = greeting.genero
    
    const arrayFiltrado = (items.filter(modelo => modelo.material === material && modelo.genero === genero))

    console.log(arrayFiltrado)
    return (
        <div className="ItemListContainer ">
            
            <ItemList items={arrayFiltrado} />           
            
        </div> 
    )
}

export default ItemListContainer;