function ordenarCuadrosAleatoriamente(){

colores = ["negro", "rojo", "naranja", "violeta", "turquesa", "blanco", "amarillo", "verde"];
colores = colores.concat(colores);
colores.sort(
    function(){
        return 0.5 - Math.random();
    }
);

document.querySelectorAll(".cuadro").forEach(
    function(cuadro,i){
        cuadro.classList.add(colores[i]);
    }
);
}

function administrarCuadro(cuadro){
if(!primerCuadro){
    primerCuadro = cuadro;
    mostrarCuadro(primerCuadro);
}
if(primerCuadro && !(primerCuadro === cuadro) && !segundoCuadro){
    segundoCuadro = cuadro;
    mostrarCuadro(segundoCuadro);
    turno++;
    
    setTimeout(() => {
        compararCuadros(primerCuadro,segundoCuadro);
        primerCuadro = "";
        segundoCuadro = "";
    }, 500);
    
}
}

function mostrarCuadro(cuadro){
    cuadro.style.opacity = "1";
}
function ocultarCuadro(cuadro){
    cuadro.style.opacity = "0";
}

function compararCuadros(A,B){
    if(A.className === B.className){
        A.classList.add("exito")
        B.classList.add("exito")
        comprobarSiJuegoFinaliza()
    }else{
        ocultarCuadro(A);
        ocultarCuadro(B);
    }
}

function comprobarSiJuegoFinaliza(){
let $cuadros = document.querySelectorAll(".cuadro")
for(i=0;i<$cuadros.length;i++){
    if(!$cuadros[i].classList.contains("exito")){
        return "";
    }
}
document.querySelector("#numeroRonda").textContent = turno;
document.querySelector("#tableroFinJuego").classList.remove("d-none");
}



let colores;
let primerCuadro;
let segundoCuadro;
let turno = 0;
ordenarCuadrosAleatoriamente();
document.querySelector("#panel-general").onclick = function(e){
    let objetivo = e.target
    if (objetivo.classList.contains("cuadro")){
        administrarCuadro(objetivo);
    }else{
       return "";
    }
}
