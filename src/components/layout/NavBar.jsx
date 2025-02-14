import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'

import Logo from '../../img/Logo.png'
import Container from './Container'

function NavBar(){
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link to='/'>
                    <img src={Logo} />
                </Link>
            </div>

            <nav className={styles.navlinks}>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projetos</Link>
                <Link to='/company'>Empresa</Link>  
                <Link to='/contact'>Contato</Link>
            </nav>
        </div>
    )
}

export default NavBar;