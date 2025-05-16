import { useAppContext } from '../context/AppContext';

const Loader = () => (
    const { loading } = useAppContext();
    if (!loading) return null;
    <div className="loading">Загрузка...</div>
);

export default Loader;
