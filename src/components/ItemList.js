import Item from './Item'




function ItemList ({items}) {
    return (
        <ul className=" d-grid container">
            
            {items.map((modelo)=><Item  id={modelo} ></Item>)}
        </ul>
    )
}

export default ItemList;