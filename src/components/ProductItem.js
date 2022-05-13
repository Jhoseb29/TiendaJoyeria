import { Link } from 'react-router-dom'

const ProductItem = ({ prodObj }) => {
    return (
        <Link to={`/shop/${prodObj.id}`}>
            <div>
                {prodObj.name}
            </div>
        </Link>
    );
};

export default ProductItem;