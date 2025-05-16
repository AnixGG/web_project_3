import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <ProductList />
                <ProductDetails />
            </main>
        </>
    );
};

export default App;
