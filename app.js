function parImpar() {
   let numero = prompt("Ingrese un nro:");
    if (isNaN(numero)){
        mensaje("Debe Ingresar un nro valido");
    }
    else{
        numero =numero%2;
        if(numero!=0)
        {
            mensaje("El numero ingresado es Impar");
        }
        else{
            mensaje("El numero ingresado es Par");
        }
    }
}

function contadorCaracteres() {
    let valor = prompt("Ingrese una frase:");
    mensaje("la cantidad de caracteres es: "+valor.length);
}

function mensaje(mensaje) {
    if(document.getElementById('Alert').checked){
        alert(mensaje);
    }
    if(document.getElementById('Console').checked){
        console.log(mensaje);
    }

    let p = document.getElementById("pResultado");
    if (p != null) {
        let padre = p.parentNode;
        padre.removeChild(p);
    }
    if(document.getElementById('Page').checked){
        let parent = document.getElementById("mensajeDiv");
        let elemento = document.createElement('p');
        elemento.setAttribute("id", "pResultado");
        elemento.innerText = mensaje;

        parent.appendChild(elemento);
    }
    

   

 
}


