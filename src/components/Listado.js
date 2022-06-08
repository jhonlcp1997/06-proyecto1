import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

    // Hooks
    // const [listadoState, setListadoState] = useState([]);

    const [editar, setEditar] = useState(0);

    useEffect(() => {
        console.log("se ejecuto esto");
        getMovies();
    }, []);


    const getMovies = () => {
        let peliculas = JSON.parse(localStorage.getItem('pelis'));
        console.log(peliculas);
        setListadoState(peliculas)

        return peliculas;
    }

    // Todo: Esto es editado por mi
    const deleteMovie = (id) =>{
        // Conseguir peliculas almacenadas
        const pelis_alamcenadas = getMovies();

        // Filtrar esas peliculas para que elimine del array la que no quiero
        let nuevo_array_peliculas = pelis_alamcenadas.filter(peli => peli.id !== parseInt(id));

        console.log(pelis_alamcenadas, nuevo_array_peliculas)

        // Actualizar el estado
        setListadoState(nuevo_array_peliculas);

        // Actualizar los datos en el localstorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas));
    }

    // const

    return (
        <>

            {listadoState !== null ?
                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>

                            <button className="edit" onClick={()=>{setEditar(peli.id)}}>Editar</button>
                            <button onClick={()=>{deleteMovie(peli.id)}} className="delete">Borrar</button>
                            {/* Aparece un nuevo componente */}
                            {editar === peli.id &&(
                                <Editar peli={peli}
                                    getMovies={getMovies}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState}
                                />
                            )}
                        </article>
                    )
                })
                : <h2>no hay peliculas por mostrar</h2>
            }
        </>
    )
}
