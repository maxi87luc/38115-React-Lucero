import Item from './Item'




function ItemList ({items}) {
    return (
        <ul className="ItemList row">
            
            {items.map((modelo)=><Item  id={modelo} ></Item>)}
        </ul>
    )
}

export default ItemList;