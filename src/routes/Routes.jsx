import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import styles from './Routes.module.css'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="*" element={<h2 className={styles.not_found}>404 - Não Encontrado</h2>} />
            </Routes>
        </Router >
    );
};

export default AppRoutes;
