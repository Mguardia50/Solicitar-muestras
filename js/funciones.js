
function mostrarMuestras () {
  
    window.localStorage.clear();
    
    portfolio.forEach(producto => {
        contenedorMuestras.innerHTML += `
            <div class="boxMuestra">
                <h2>${producto.item}</h2>
                <p>Precio u$${producto.precio}/Kg + IVA</p>
                <button id="${producto.id}" class="btnMuestras">Solicitar Muestra</button>
            </div>
        `
    });
}



function muestraSolicitadax(e) {
        
    if (e.target.classList.contains("btnMuestras")){
        let iditem = parseInt(e.target.id); /* le hice parseInt porque estaba como array, también podría haberle cambiado el ID a numero en el HTML? */
        muestraSolicitada(iditem);
    }

}

function muestraSolicitada(iditem){

    if (i>=5){
        alert("maximo de muestras alcanzado");
        return;
    }

    let contador = 4 - i;
    contadorMuestras.innerHTML = `Cantidad máxima restante: ${contador} `;

    verificador.push(iditem);
    verificador.sort(((a,b) => a - b));


    for (verificado in verificador){
        
            if (verificador[verificado]==verificador[verificado-1]){
                verificador.splice(verificado,1);
                alert("Ya se pidio dicha muestra, por favor seleccione otra");
                return;
            }
        
    }
    

    

            const result = portfolio.find((eleme) => eleme.id === iditem);
            let info = result.item;
            localStorage.setItem (result.id,info);
            
            let muestraTab = document.getElementById("tabla");
            muestraTab.innerHTML += `<tr><td>${info}</td></tr>`;
            /* muestraTab.append(muestraTab); */

            i = i + 1;

            return i;
            
}




function funContinuarPedido(){

    if (i<=0){
        alert("seleccione al menos una muestra");
       return
    }   
    document.location.href = "./html/MuestrasSolicitadas.html";

/*     No borro hasta la version final este código por si hay elementos que puedo llegar a reutilizar


    pedidoFinal.splice(0, pedidoFinal.length);
    sumatoria.splice(0,sumatoria.length);
    pedidoFinalconcat.splice(0, pedidoFinalconcat.length);

    
        
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
 */}

