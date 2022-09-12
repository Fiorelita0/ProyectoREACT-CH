import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return(
        <div>
        <div>{greeting}</div>
        <div><ItemCount initial={1} stock={15}/></div>
        </div>
        
    )
}
export default ItemListContainer;