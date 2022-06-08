import React, { useState } from 'react'
import { saveOnStorage } from './helpers/saveInStorage';

export const Crear = ({setListadoState}) => {
    // go to label title component
    const tituloComponente = "Añadir Pélicula";

    // hook state all change peli
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    // const {titulo, descripcion} = peliState;

    // Todo: save in state pelis & save on Storage
    const getFormValues = e =>{
        e.preventDefault();

        let target = e.target;
        let titulo = target.title.value;
        let descripcion = target.description.value;
        // alert(titulo + "-"+ descripcion);

        // Crea objeto
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };

        // guardar estado
        setPeliState(peli);

        // Update list movies
        setListadoState(items =>{
            return[...items, peli]
        })

        // Guardar en el almacenamiento local
        saveOnStorage('pelis', peli);
    }

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            {(peliState.titulo && peliState.descripcion)?peliState.descripcion : "nada"}
            <form onSubmit={getFormValues}>
                <input type="text" 
                        placeholder="title" 
                        name='title'
                        id='title'/>
                <textarea placeholder="descripcion"
                name='description'
                id='description'></textarea>
                <input type="submit" 
                        value="Guardar"
                        id='save'/>
            </form>
        </div>
    )
}
