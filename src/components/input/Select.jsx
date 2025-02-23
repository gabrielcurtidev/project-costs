import styles from './select.module.css'

function Select({name, text, options, value}){
    return (

        <div className={styles.select_container}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma categoria</option>

                {
                    options.map((option) => (
                        <option value={option.id} key={option.id}>
                            {option.name}
                        </option>
                    ))
                }

            </select>
        </div>
    )
}

export default Select;