import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import styles from './Routes.module.css'
import Home from '../pages/Home';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* <Route path="/" element={<Navigate to="/login" />} /> */}
                <Route path='/home' element={<Home />} />
                <Route path="*" element={<h2 className={styles.not_found}>404 - Não Encontrado</h2>} />
            </Routes>
        </Router >
    );
};

export default AppRoutes;
