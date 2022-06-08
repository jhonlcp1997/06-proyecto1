// function 
export const saveOnStorage = (clave, item) =>{
        
    // get elements from localStorage
    let elementos = JSON.parse(localStorage.getItem("pelis"));

    // verify item in storage
    if(Array.isArray(elementos)){
        // save into array a new element
        // console.log("Realizo el push");
        elementos.push(item);
    } else{
        elementos = [item];
    }

    // save item on Storage
    localStorage.setItem(clave, JSON.stringify(elementos));

    return elementos;
}