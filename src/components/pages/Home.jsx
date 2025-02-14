import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton';

import savings from '../../img/logo-porquinho.png'

function Home(){
    return (
        <section className={styles.container_home}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Começe a gerenciar seus projetos agora mesmo</p>
            <LinkButton to='/newproject' text='Criar Projeto' />
            <img src={savings} alt="costs-porquinho" />

        </section>
    )
}

export default Home;