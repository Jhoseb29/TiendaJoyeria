import { Link } from 'react-router-dom';

const ProductItem = ({ prodObj }) => {


    return(
        <Link 
            to={`/shop/${prodObj.id}/`} 
            className='product animate' 
            key={prodObj.id} 
        >
            <div className="product-image">
                <img src={prodObj.images[0].url} alt="" />
                <img src={prodObj.images[1]?.url} alt="" className='overlay' />
            </div>
            <h5>{prodObj.name}</h5>
            <span className="price">${prodObj.price}</span>
        </Link>
    )
}

export default ProductItem;
