import styles from './Footer.module.css'
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'


function Footer(){
    return (
        <div className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <BiLogoFacebook />  
                </li>
                <li>
                    <BiLogoInstagram />
                </li>
                <li>
                    <BiLogoLinkedin />
                </li>
            </ul>

            <p className={styles.copyList}>
                <span>CurtiCosts</span> &copy; 2025
            </p>
        </div>
    )
}

export default Footer;