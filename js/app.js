document.querySelector("#txtBtn").addEventListener("click", cargarTexto);
document.querySelector("#jsonBtn").addEventListener("click", cargarJSON);

function cargarTexto(){
   fetch("datos.txt")
      .then(function(response){
         return response.text();
      })
      .then(function (data){
         document.querySelector("#resultado").innerHTML = data;
      }).catch(function (error){
         console.log(error);
      });
}

function cargarJSON(){
   fetch("empleados.json")
      .then(function(response){
         return response.json();
      })
      .then(function(data){
         const resultado = document.querySelector("#resultado");
         resultado.innerHTML = "";
         for(let i = 0, n = data.length; i<n; i++){
            const ul = document.createElement("ul");
            ul.innerHTML = `
               Nombre: ${data[i].nombre}<br>
               Puesto: ${data[i].puesto}<br>
            `
            resultado.appendChild(ul);
         }
      })
}