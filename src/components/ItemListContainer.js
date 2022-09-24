import ItemCount from './ItemCount'

function ItemListContainer ({greeting}) {
    return (
        <div className="ItemListContainer">
            <ItemCount stock={5} initial={0} addOn={1} />
            
            <p className="p-ItemListContainer">{greeting}</p>
            
        </div> 
    )
}

export default ItemListContainer;