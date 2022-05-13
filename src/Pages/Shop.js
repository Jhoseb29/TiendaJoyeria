import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ProductItem from "../components/ProductItem"
import { setFilterCategoriesThunk, setCategoriesThunk, setProductThunk, setFilterHeadlineThunk } from "../redux/actions"
import { Link } from 'react-router-dom'



const Shop = () => {
    const dispatch = useDispatch()
    const productArr = useSelector(state => state.products)
    const categories = useSelector(state => state.categories)
    const [headline, setHeadline] = useState("")


    useEffect(() => {
        dispatch(setProductThunk())
        dispatch(setCategoriesThunk())
    }, [dispatch])

    const searchProduct = (e) => {
        e.preventDefault();
        dispatch(setFilterHeadlineThunk(headline))
    }



    const categoriesList = categories.map(item => <button
        key={item.id}
        onClick={() => dispatch(setFilterCategoriesThunk(item.id))}>
        {item.name}
    </button>)


    const list = productArr.length === 0 ? (<p> No se encontraron resultados</p>) : (productArr.map((item) => <ProductItem key={item.id} prodObj={item} />))

    return (

        <div>
            <div>
                <button><Link to="/singup">Sing Up</Link></button>
                <button><Link to="/login">LogOut</Link></button>
                <button><Link to="/">Home</Link></button>                
            </div>
            <h1>esta es mi tienda</h1>
            <form onSubmit={searchProduct}>
                <input
                    type="text"
                    placeholder="Search Product"
                    value={headline}
                    onChange={e => setHeadline(e.target.value)} />
                <button>Search</button>
            </form>
            {categoriesList}
            <button onClick={() => dispatch(setProductThunk())} >
                All Products
            </button>
            <div>
                {list}
            </div>

        </div>
    )
}

export default Shop