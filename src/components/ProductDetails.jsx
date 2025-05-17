import { useAppContext } from '../context/AppContext';

const ProductDetails = ({ onBack }) => {
    const { selectedProduct, setSelectedProduct } = useAppContext();

    if (!selectedProduct) return null;

    return (
        <div className="product-details">
            <button onClick={() => setSelectedProduct(null)} className="back-to-products">Back</button>
            <img src={selectedProduct.image} alt={selectedProduct.title} className="detail-image" />
            <h2 className="detail-title">{selectedProduct.title}</h2>
            <div className="detail-price">${selectedProduct.price}</div>
            <span className="detail-category">{selectedProduct.category}</span>
            <p className="detail-description">{selectedProduct.description}</p>
            <div className="rating">
                Rating: {selectedProduct.rating.rate} ({selectedProduct.rating.count})
            </div>
        </div>
    );
};

export default ProductDetails;
