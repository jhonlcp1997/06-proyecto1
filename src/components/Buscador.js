import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {
    const [find, setFind] = useState('');
    const [noFind, setNoFind] = useState(false);


    const findMovie= (e)=>{
        // Crear estado y actualizarlo
        setFind(e.target.value)
        console.log(find);

        // El listado completado de pelicula

        // 
        let movieFinded = listadoState.filter(peli =>{
            return  peli.titulo.toLowerCase().includes(find.toLocaleLowerCase());
        })

        if(find.length <= 1 || findMovie ===0){
            movieFinded = JSON.parse(localStorage.getItem("pelis"))
            setNoFind(true);
        }else{
            setNoFind(false);
        }

        // Actualizar el estado


        setListadoState(movieFinded);
    }

    return (
        <div className="search">
            <h3 className="title">Buscador: {find}</h3>
            {(noFind==true && find.length > 1) && (<span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>)}
            <form action="">
                <input type="text" 
                    id='search_field'
                    name='busqueda'
                    autoComplete='off'
                    
                    onChange={findMovie}
                />
                <button>Buscar</button>
            </form>
        </div>
    )
}
;