import Item from "../Item/Item";


const ItemList = (items) => {
    return (
        <>
            {items.datos.map(item => (
                <Item
                title={item.title}
                pictureUrl={item.pictureUrl}
                price={item.price}
                id={item.id}
                key={item.id}/>
            ))}
        </>
    )
}

export default ItemList;