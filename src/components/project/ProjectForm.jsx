function ProjectForm(){
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome de seu projeto" />
            </div>

            <div>
                <input type="number" placeholder="Insira o valor de seu orçamento"/>
            </div>

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