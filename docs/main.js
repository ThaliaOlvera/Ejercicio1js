
function promedio (elem1, elem2, elem3, elem4, elem5){
 var promedio= ((elem1+elem2+elem3+elem4+elem5) / 5);

    if (promedio <=30){
        console.log("Muy deficiente");
    } else if (promedio <=31 ) {
        console.log("Insuficiente");        
    } else if (promedio <=51) {
        console.log("Suficiente");
    } else if (promedio <=61){
        console.log("Bien");
    }else if (promedio <=71){
        console.log("Notable")
    }else if(promedio <= 91){
        console.log("Sobresaliente");
    }else{
        console.log("Error de promedio");
    }
}
promedio (50,50,50,90,90);

