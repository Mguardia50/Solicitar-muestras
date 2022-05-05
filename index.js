
let i=0
const verificador = [];
const sumatoria = [];
const pedidoFinal = [];

const portfolio = [
    {id: 1, item: "natamicina", precio: 170},
    {id: 2, item: "Beta Caroteno", precio: 150},
    {id: 3, item: "Sucralosa", precio: 92},
    {id: 4, item: "Acesulfame K", precio: 15.8},
    {id: 5, item: "Dioxido de titanio", precio: 14.5},
    {id: 6, item: "Ácido Cítrico", precio: 4.5}
    ];

alert("solicite hasta 5 muestras de producto")

 
let tabla = document.getElementsByClassName("tabla");
tabla[0].innerHTML = "Por favor ingrese las muestras";


function muestraSolicitada(iditem){
    
    verificador.push(iditem);
    verificador.sort(((a,b) => a - b));


    for (verificado in verificador){
        
            if (verificador[verificado]==verificador[verificado-1]){
                verificador.splice(verificado,1);
                alert("Ya se pidio dicha muestra, por favor seleccione otra");
                process.exit();
            }
        
    }
    
    if (i>=5){
        alert("maximo de muestras alcanzado");
    }

            const result = portfolio.find((eleme) => eleme.id === iditem);
            let info = `Producto: ${result.item}, Precio: ${result.precio}/kg + IVA`;
            tabla[i].innerHTML = info;
            i = i + 1;
            return i;
            return verificador;
}

function continuar(){
  

    if (i<=0){
        alert("seleccione al menos una muestra");
       
    }

        
    for (cadaUno in verificador){
     
        
        const resultado = portfolio.find((elemen) => elemen.id === verificador[cadaUno]);

        
        let cantidad = parseInt(prompt("Ingrese la cantidad de muestra de " +resultado.item+ " solicitada en gramos"));
        
        pedidoFinal.push(resultado.item);

        while (isNaN(cantidad) || cantidad<0 || cantidad >100){
            alert("Ingrese sólo numeros entre 1 y 100 gramos");
            cantidad = parseInt(prompt("Ingrese la cantidad de muestra solicitada en gramos"));
        
        }
     
        
        sumatoria.push(cantidad);

        pedidoFinalconcat = pedidoFinal.concat(sumatoria);

    }


    alert("las muestras con sus respectivos gramajes son de: " +pedidoFinalconcat);
    const totalFinal =sumatoria.reduce((acumulador, elementox) => acumulador + elementox, 0)
    alert("usted ha pedido un total de " + totalFinal +"g de muestras, los cuales será  entregados a la brevedad. Muchas gracias");
}
    

