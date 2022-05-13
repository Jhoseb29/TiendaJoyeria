import { useDispatch, useSelector } from "react-redux";
import { setCartProductsThunk } from "../redux/actions";
import CartProduct from "../components/CartProduct"
import { useEffect, useState } from "react"
import { postCheckout } from "../services";
import { useNavigate } from "react-router-dom";


const Cart = () => {

    const dispatch = useDispatch()
    const cartValues = useSelector(state => state.cart)
    const [ total, setTotal ] = useState(0)
    const [confirmCheckout, setConfirmCheckout] = useState (false)
    const navigate = useNavigate()


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

    const list = cartValues.map((item) => {
        return <CartProduct key={item.id} prodObj={item} />
    })

    return (
        <div>
            <h1>Cart</h1>
            <button onClick={() => setConfirmCheckout(true)} >Checkout</button>            <h1>Total: {total}</h1> 
            {list}
        </div>
    )
}

export default Cart;