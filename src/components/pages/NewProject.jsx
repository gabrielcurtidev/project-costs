import { useHistory } from 'react-router-dom';

import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css'

function NewProject(){

    const history = useHistory()

    function createPost(project){

        // inicializando com cost e services

        project.cost =  0
        project.services =  []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.container_NewProject}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} />
        </div>
    )
}

export default NewProject;