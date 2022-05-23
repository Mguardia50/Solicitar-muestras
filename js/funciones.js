
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

   /* i>=5 && alert("maximo de muestras alcanzado");  es mentira lo del return implicito, el codigo continua */
    
    
    if (i>=5){
        Swal.fire({
            icon: 'error',
            text: 'maximo de muestras alcanzado',
          })
        return;
    } 



    let contador = 4 - i;
    contador<=0 && console.log("No se puede pedir màs de 5 muestras");


    contadorMuestras.innerHTML = `Cantidad máxima restante: ${contador} `;

    verificador.push(iditem);
    verificador.sort(((a,b) => a - b));


    for (verificado in verificador){
        
            if (verificador[verificado]==verificador[verificado-1]){
                verificador.splice(verificado,1);
                Swal.fire({
                    icon: 'error',
                    text: "Ya se pidio dicha muestra, por favor seleccione otra",
                  })
              
                return;
            } 

    }
    

    

            const result = portfolio.find((eleme) => eleme.id === iditem);
            let info = JSON.stringify({id: result.id, item: result.item});
            localStorage.setItem ("ProgramaParaPedirMuestrasByMarianoGuardia" + result.id,info);
            
            let muestraTab = document.getElementById("tabla");
            muestraTab.innerHTML += `<tr><td>${result.item}</td></tr>`;
            /* muestraTab.append(muestraTab); */

            i = i + 1;

            return i; /* era necesario este return? */
            
}




function funContinuarPedido(){


     i>0 ? document.location.href = "./html/MuestrasSolicitadas.html" : Swal.fire({
        icon: 'error',
        text: "Seleccione al menos una muestra",
      });

    }

