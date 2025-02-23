import { useState, useEffect } from "react";

import Input from "../input/input";
import Select from "../input/select";
import BtnSubmit from "../input/BtnSubmit";

function ProjectForm(){

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch(err => console.log(err))
    }, [])
    
    

    return (
        <form>
            <Input
            type='text'
            name='email'
            placeholder='Insira o nome do projeto'
            text='Nome do projeto:'
            />

            <Input
            type='number'
            name='number'
            placeholder='Insira o valor de seu orçamento'
            text='Valor do orçamento:'
            />

            <Select
            name='category_id'
            text='Selecione a categoria:'
            options={categories}
            />

            <BtnSubmit
            type='submit'
            value='Criar projeto'
            />
            
        </form>
    )
}

export default ProjectForm;