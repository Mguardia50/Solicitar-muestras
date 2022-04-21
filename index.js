
let i=1


alert("solicite hasta 5 muestras de producto")

function muestraSolicitada(nombre){
    

    if (i>5){
        alert("maximo de muestras alcanzado");
    }

    switch(nombre){
        case 1:
            document.getElementById("muestra"+i).value = "natamicina";
            return i=i+1;
        break;
        case 2:
            document.getElementById("muestra"+i).value = "Sucralosa";
            return i=i+1;
        break;
        case 3:
            document.getElementById("muestra"+i).value = "Benzoato de sodio";
            return i=i+1;
        break;
    }
    
    
}

function continuar(){

    if (i<=1){
        alert("seleccione al menos una muestra");
       
    }

    else{
        let numerador = 0;
        for(let a=1; a<i; a++){
            let producto=("muestra" + a)
            let ingrediente = document.getElementById(producto).value;

            let cantidad = parseInt(prompt("Ingrese la cantidad de muestra de " +ingrediente+ " solicitada en gramos"));
        
            while (isNaN(cantidad) || cantidad<0 || cantidad >100){
                alert("Ingrese sólo numeros entre 1 y 100 gramos");
                cantidad = parseInt(prompt("Ingrese la cantidad de muestra solicitada en gramos"));
            
            }
            numerador = cantidad + numerador;
        }
        alert("el total de sus muestras es de " + numerador + " gramos, se enviarán a la brevedad, el tiempo de demora es de 1 a 2 semanas hábiles. Muchas gracias ")
        
    }
}
    

