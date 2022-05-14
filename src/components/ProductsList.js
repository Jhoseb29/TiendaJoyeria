import  ProductItem  from '../components/ProductItem'
import  '../styles/productlist.css'
const ProductsList = ({ products }) => {
    return (
        <div className="products-list">

            {products.map(product => <ProductItem key={product.id} prodObj={product} />)}
            
        </div>
    );
};

export default ProductsList;