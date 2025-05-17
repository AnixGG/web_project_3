import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState('all');

    return (
        <AppContext.Provider
            value={{
                data,
                setData,
                selectedProduct,
                setSelectedProduct,
                loading,
                setLoading,
                category,
                setCategory,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
