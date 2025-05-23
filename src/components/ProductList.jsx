import { useAppContext } from '../context/AppContext';
import { useProducts } from '../hooks/useProducts';

const ProductList = ({ onSelect }) => {
    const { data, selectedProduct, category } = useAppContext();
    const { loadProductDetails } = useProducts();

    if (selectedProduct) return null;

    const filtered = category === 'all' ? data : data.filter(product => product.category === category);

    return (
        <div className="products">
            {filtered.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} className="product-image" />
                    <div className="product-info">
                        <h4 className="product-title">{product.title}</h4>
                        <div className="product-price">${product.price}</div>
                        <button onClick={() => loadProductDetails(product.id)}>Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
