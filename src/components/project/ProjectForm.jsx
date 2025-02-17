import Input from "../input/input";

function ProjectForm(){
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

            

            <div>
                <select name="category_id">
                    <option disabled selected>Selecione uma categoria</option>
                </select>
            </div>

            <div>
                <input type="submit" value="criar projeto" />
            </div>
        </form>
    )
}

export default ProjectForm;