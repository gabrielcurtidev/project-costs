import styles from './Container.module.css'

function Container(props){
    return (
        //ACESSA DINAMICAMENTE UMA CLASSE DO CSS MODULE COM BASE NA PROPS.CUSTOMCLASS     
        <div className={` ${styles.container} ${styles[props.customClass]} `}> 
            {props.children}
        </div>
    )
}

export default Container;