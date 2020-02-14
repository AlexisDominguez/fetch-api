document.querySelector("#txtBtn").addEventListener("click", cargarTexto);
document.querySelector("#jsonBtn").addEventListener("click", cargarJSON);
document.querySelector("#apiBTN").addEventListener("click", cargarREST);

function cargarTexto(){
   fetch("datos.txt")
      .then(response => response.text())
      .then(data => document.querySelector("#resultado").innerHTML = data)
      .catch(error => console.log(error));
}

function cargarJSON(){
   fetch("empleados.json")
      .then(response => response.json())
      .then(data => {
         const resultado = document.querySelector("#resultado");
         resultado.innerHTML = "";
         for(let i = 0, n = data.length; i<n; i++){
            const ul = document.createElement("ul");
            ul.innerHTML = `
               Nombre: ${data[i].nombre}<br>
               Puesto: ${data[i].puesto}<br>
            `;
            resultado.appendChild(ul);
         }
      })
}

// Carga una REST API mediante FETCH
function cargarREST(){
   fetch("https://picsum.photos/list")    // REST
      .then(response => response.json())  // Respuesta del FETCH
      .then(data => {               // Datos retornados del response
         const resultado = document.querySelector("#resultado");
         resultado.innerHTML = "";

         // Imprimero los datos JSON de la API REST en el documento
         for(let i = 0, n = data.length; i<n; i++){
            const ul = document.createElement("ul");
            ul.innerHTML = `
               Autor: ${data[i].author} <br>
               Url  : <a href="${data[i].post_url}">${data[i].post_url}</a><br>
            `;

            resultado.appendChild(ul);
         }
      })
      .catch(error => console.log(error));    // Captura un error en caso de ser necesario
}