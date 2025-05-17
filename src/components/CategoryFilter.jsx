import { useAppContext } from '../context/AppContext';
import { useEffect, useState } from 'react';

const CategoryFilter = () => {
    const { selectedProduct, category, setCategory, data} = useAppContext();
    const [categories, setCategories] = useState(["all"]);

    useEffect(() => {
        const uniqueCategories = ['all', ...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
    }, [data]);

    if (selectedProduct) return null;

    return (
        <div className="category-filter">
            <label>Категория:</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>{cat}</option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;
