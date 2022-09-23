import ItemCount from './ItemCount'

function ItemListContainer ({greeting}) {
    return (
        <div className="ItemListContainer">
            <ItemCount stock={5} />
            <ItemCount stock={1} />
            <ItemCount stock={100} />
            <ItemCount stock={0} />
            <ItemCount stock={5} />
            <ItemCount stock={1} />
            <ItemCount stock={3} />
            <ItemCount stock={1} />
            <p className="p-ItemListContainer">{greeting}</p>
            
        </div> 
    )
}

export default ItemListContainer;