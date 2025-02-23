import styles from './BtnSubmit.module.css'

function BtnSubmit({type, value}){
    return (
        <div className={styles.btn_container}>
            <input
            type={type}
            value={value}
            />
        </div>
    )
}

export default BtnSubmit;