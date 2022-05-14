import { useDispatch, useSelector } from "react-redux";
import { setCartProductsThunk } from "../redux/actions";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import { postCheckout } from "../services";
import { useNavigate } from "react-router-dom";
import { deleteCartProductThunk } from "../redux/actions";
import '../styles/cart.css'


const Cart = () => {

    const dispatch = useDispatch()
    const cartValues = useSelector(state => state.cart)
    const [ total, setTotal ] = useState(0)
    const [confirmCheckout, setConfirmCheckout] = useState (false)
    const navigate = useNavigate()
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() =>{
        if(deleteId){
            dispatch(deleteCartProductThunk(deleteId))
        }
    }, [dispatch, deleteId])

    useEffect(() => {
        dispatch(setCartProductsThunk())
    }, [dispatch])

    useEffect(() => {
        let amount = 0;
        cartValues.forEach(item => amount += item.product.price * item.quantity);
        setTotal(amount)
    }, [cartValues])

    useEffect(() => {
        if(confirmCheckout){
          postCheckout()
            .then(() => {
              setConfirmCheckout(false)
              navigate('/shop/')
            })
        }
      }, [confirmCheckout, navigate])

    
    return (
        <section className='cart'>
            <div className="container">
                <h1>SHOPPING CART</h1>
                {
                    cartValues.length ? (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>item</th>
                                        <th>quantity</th>
                                        <th>price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartValues.map(cartItem => {
                                            return (
                                            <tr key={cartItem.id} className='cart-item'>
                                                <td className='item'>
                                                <button onClick={() => setDeleteId(cartItem.id)} >X</button>
                                                    <div className="product-image">
                                                        <img src={cartItem.product.images[0].url} alt="" />
                                                    </div>
                                                    <Link to={`/shop/${cartItem.product.id}`} className='product-name'>
                                                        {cartItem.product.name}
                                                    </Link>
                                                </td>
                                                <td className='quantity'>
                                                    <span>{cartItem.quantity}</span>
                                                </td>
                                                <td className='price'>
                                                    ${cartItem.product.price}
                                                </td>
                                            </tr>
                                        )})
                                    }
                                </tbody>
                            </table>
                            <div className='subtotal'>Subtotal <span className="price">${total}</span></div>
                            <button onClick={() => setConfirmCheckout(true)} >Checkout</button>
                        </>
                    ) : (
                        <>
                            <p className="empty-message">You have nothing in your shopping cart.</p>
                            <Link to='/shop' className='link-squared'>Continue Shopping</Link>
                        </>
                    )
                }
            </div>
        </section>
    );
};

export default Cart;