import { useAppContext } from '../context/AppContext';

const Loader = () => {
    const { loading } = useAppContext();

    if (!loading) return null;

    return (
        <div className="loader-overlay">
            <div className="spinner"></div>
        </div>
    )
};

export default Loader;
