import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Loader from './components/Loader';
import CategoryFilter from './components/CategoryFilter';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Loader />
                <CategoryFilter />
                <ProductList />
                <ProductDetails />
            </main>
        </>
    );
};

export default App;
