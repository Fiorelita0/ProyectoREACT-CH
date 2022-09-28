import { useContext } from 'react'
import { CartContext } from './CartContext';
import "./ProductoContainer.css";

function ProductContainer({ product, removeItem }) {
    const ctx = useContext(CartContext);
    return (
        <div className='display-flex' id={product.id} >
            <div className="" >
                <img src={product.imagen} alt={product.title} className='img-prod' />
                </div>
            <div className="" >
                <p className='titleCartP'>{product.title}</p>
                </div>
            <div className="" >
                <p className='countCartP'>{(ctx.calcQty(product.id))} item(s)/ ${product.precio} </p>
                </div>
            <div className="" >
                <button onClick={() => { removeItem(product.id) }} type="button" className="btn btn-primary">Eliminar producto</button>
            </div>
        </div>
    )
}

export default ProductContainer