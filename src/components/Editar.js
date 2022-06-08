import React from 'react'

export const Editar = ({peli, getMovies, setEditar, setListadoState}) => {
    const titleComponent = "editar Pelicula";
    const saveEdit = (e,id)=>{
        e.preventDefault();
        
        // Conseguir el target del evento
        let target = e.target;

        // Buscar el indice del objeto de las peliculas
        const moviesOnStorage = getMovies();
        const indice = moviesOnStorage.findIndex(peli => peli.id ===id)
        
        // Crear objeto con el indice sacado
        let peliUpdate = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // Actualizar indices
        moviesOnStorage[indice] = peliUpdate;

        // Guardar listado en localStorage
        localStorage.setItem('pelis', JSON.stringify(moviesOnStorage));

        // Actualizar estado
        setListadoState(moviesOnStorage);
        setEditar(0);
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>Editar {peli.id}</h3>
        <form onSubmit={e => saveEdit(e, peli.id)}>
            <input type="text"
                name="titulo"
                className="titulo_editado"
                defaultValue={peli.titulo}
            />
            <textarea name='descripcion' 
                className='descripcion_editada'
                defaultValue={peli.descripcion}
            />
            <input type="submit"
                className='editar'
                value="actualizar"
            />
        </form>
    </div>
  )
}
