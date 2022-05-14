import { useDispatch } from 'react-redux';
import { setFilterCategoriesThunk } from '../redux/actions'



const Categories = ({ category }) => {
    
    const dispatch = useDispatch()
    

    return (            
        <div>
            <button
                onClick={() => dispatch(setFilterCategoriesThunk(category.id))}>
                {category.name}
            </button>
        </div>
        
    );
};

export default Categories;