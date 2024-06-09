import styles from './Header.module.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo Livraria Asafe" />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav_menu}>
                    <li><Link to="/home" >Home</Link></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
