import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Loader from './components/Loader';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Loader />
                <ProductList />
                <ProductDetails />
            </main>
        </>
    );
};

export default App;
