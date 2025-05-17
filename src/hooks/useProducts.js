import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const API_URL = 'https://fakestoreapi.com';

export const useProducts = () => {
    const {setData, setLoading, setSelectedProduct} = useAppContext();

    const loadAllProducts = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/products`);
            const allproducts = await res.json();
            setData(allproducts);
        } catch (err) {
            console.error('Ошибка загрузки продуктов:', err);
        } finally {
            setLoading(false);
        }
    };

    const loadProductDetails = async (id) => {
        try {
            setLoading(true);
            const res = await fetch(`${API_URL}/products/${id}`);
            const product = await res.json();
            setSelectedProduct(product);
        } catch (e) {
            console.error('Ошибка загрузки товара:', e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {loadAllProducts();}, []);
    return { loadAllProducts, loadProductDetails};
};
