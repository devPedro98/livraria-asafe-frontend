import styles from './Header.module.css'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo Livraria Asafe" />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav_menu}>
                    <li><a href="/home">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
