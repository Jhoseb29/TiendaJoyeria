import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductsList from "../components/ProductsList"
import { setCategoriesThunk, setProductThunk, setFilterHeadlineThunk } from "../redux/actions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Categories from "../components/Categories"
import '../styles/shop.css'



const Shop = () => {
    const dispatch = useDispatch()
    const productArr = useSelector(state => state.products)
    const categories = useSelector(state => state.categories)
    const [headline, setHeadline] = useState("")
    const [open, setOpen] = useState(false)

    useEffect(() => {
        dispatch(setProductThunk())
        dispatch(setCategoriesThunk())
    }, [dispatch])

    const searchProduct = (e) => {
        e.preventDefault();
        dispatch(setFilterHeadlineThunk(headline))
    }



    const categoriesList = categories.map((item) => <Categories key={item.id} category={item} />)




    return (

        <div className="shop">
            <div className="nav-container">
                <div className="items-container">
                    <div className="bars">
                        <FontAwesomeIcon className="color-style" onClick={() => setOpen(!open)} icon="bars" />
                        {open && <ul className="bars-container">
                            <li><Link className="color-size"to="/login"><FontAwesomeIcon  icon="arrow-right-from-bracket"  />LogOut</Link>
                            </li>
                            <li><Link className="color-size"to="/"><FontAwesomeIcon icon="house-crack" />Home</Link>
                            </li>
                        </ul>}
                    </div>
                    <div className="cart-container">

                        <Link className="color-style" to="/cart"><FontAwesomeIcon icon="cart-shopping" /></Link>
                    </div>
                </div>
            </div>
            <h1>esta es mi tienda</h1>
            <div className="search">
                <form onSubmit={searchProduct}>
                    <input
                        type="search"
                        placeholder="Search Product"
                        value={headline}
                        onChange={e => setHeadline(e.target.value)} />
                    <button>Search</button>
                </form>
            </div>

            {categoriesList}
            <button onClick={() => dispatch(setProductThunk())} >
                All Products
            </button>
            {
                productArr.length ? (
                    <>
                        <ProductsList products={productArr} />
                    </>
                ) : (
                    <div className="not-found">
                        <span className='message'>Not products found</span>
                    </div>
                )
            }
        </div>
    )
}

export default Shop