import styles from './Input.module.css'

function Input({type, name, placeholder, text}){
    return (
        <div className={styles.input_container}>
            <label htmlFor={name}>{text}</label>
            <input
            type={type}
            name={name}
            placeholder={placeholder}
            />
        </div>
    )
}

export default Input;