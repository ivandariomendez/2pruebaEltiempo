    const url = "https://images-api.nasa.gov/search?q=apollo%2011";

    fetch(url)
        .then((repuesta) => repuesta.json())
        .then((data) => mostrarDatos(data))
        .catch((error) => console.log(error));
        
    const mostrarDatos = (data) => {
        const arreglo = (data.collection.items).slice(0, 10);
        
       console.log(arreglo);
        let body = "";
        let title= "";
        let description= "";
        let imagen = "";
        for (let i = 0; i < arreglo.length; i++) {
            
            //-- secuencial
            body += `  <h1>Título: ${arreglo[i].data[0].title}</h1>
                    <p> <b>Descripción:</b> ${arreglo[i].data[0].description}</p>
                    <img src="${arreglo[i].links[0].href}" alt="esto es una imagen">
                    `;

            //---- tabla 
            title += `<h3> ${arreglo[i].data[0].title}</h3>`;
            description += `<p>${arreglo[i].data[0].description}<p>`;
            imagen =+ `${arreglo[i].links[0].href}`;
           
        }

        document.getElementById("datos").innerHTML = body;
        document.getElementById("title").innerHTML = title;
        document.getElementById("description").innerHTML = description;
        document.getElementById("imagen").innerHTML = imagen;
    };
