import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setInfoProductThunk, setFilterCategoriesThunk } from "../redux/actions";
import { useEffect, useState } from 'react';
import { addProductToCart } from "../services";
import ProductsList from "../components/ProductsList"
import { Link } from 'react-router-dom';


const Product = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productInfo)
    const filterProducs = useSelector(state => state.products)
    const [quantity, setQuantity] = useState(0)
    const [confirm, setConfirm] = useState(false)
    const [filter, setFilter] = useState([])

    useEffect(() => {
        dispatch(setInfoProductThunk(id))

    }, [dispatch, id])

    useEffect(() => {
        if (quantity && confirm) {
            addProductToCart({
                product: id,
                quantity: quantity
            })
                .then(() => {
                    setConfirm(false)
                })

        }
    }, [quantity, confirm, id])

    useEffect(() => {
        if (product.category) {
            dispatch(setFilterCategoriesThunk(product.category.id))
            setFilter(filterProducs.filter((item) => product.id !== item.id))
        }

    }, [dispatch, product, filterProducs])


    const decrement = () => {
        setConfirm(false)
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }


    }
    const increment = () => {
        setConfirm(false)
        setQuantity(quantity + 1)
    }


    return (
        <div>
            <>
                <h1>{product.name}</h1> <button><Link to="/cart">Cart</Link></button>
                <button><Link to="/shop">Shop</Link></button>

                <div>
                    {product.images?.map((item) => <img src={item.url} alt='' key={item.id} width="200px" />)}
                    
                    
                    <p>{product.description}</p>
                    <button onClick={decrement}>-</button>
                    {quantity}
                    <button onClick={increment}>+</button>
                    <br />
                    <button onClick={() => setConfirm(true)}>Add To Cart</button>
                </div>
                <div>
                <h2>Productos Similares</h2>
                <ProductsList products={filter} />
                </div>

            </>

        </div>


    );
};

export default Product;