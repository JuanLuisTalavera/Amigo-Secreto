let listaNombres = [];

function agregarAmigo(){

    let nombre = document.getElementById("amigo").value //recibiendo el nombre del usuario 
    
    if (nombre === ""){  //Esto es para verificar ingresen un nombre y no este vacio.
        alert("Por favor, escribe un nombre")
    }else {
        listaNombres.push(nombre);
        limpiarCampo();
        mostrarNombres();
    }
}
//Aca se sortea al amigo usando el lenght para recorrer 
function sortearAmigo(){
    if (listaNombres.length == 0 ){
        alert("No hay nombres para sortear");
    }else {
        let indiceSorteado = Math.floor((Math.random()*listaNombres.length));
        let nombreSorteado = listaNombres[indiceSorteado];
        document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong style="color:green">${nombreSorteado}</strong>`;
        document.getElementById("listaAmigos").innerHTML = "";
    }
}

function mostrarNombres (){
   document.getElementById("listaAmigos").innerHTML = listaNombres.join("<br>");

}


function limpiarCampo() { //LIMPIA EL CAMPO DE ENTRA CON ID AMIGO
    document.getElementById('amigo').value = "";
}



