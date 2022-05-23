
        const muestras = [];
        const muestrasObj = [];
        const pesoMuestras = [];
        let pedidoFinalTotal = [];
        
        const llaveLS = "ProgramaParaPedirMuestrasByMarianoGuardia";

        for (let i= 0; i< localStorage.length; i++){
            
            
            let clave = localStorage.key(i);
            
                if (clave.includes(llaveLS)){

                    let valor = localStorage.getItem(clave); /* se que lo podria hacer en una sola linea, pero posiblemente en futuro también tenga que usar esto, será 1 sola linea al final en caso de no ser utilizado */
                    let valorParse = JSON.parse(valor);
                    
                    muestrasObj.push(valorParse);
                    muestras.push(valorParse.item);

                    
                    const listaMuestras = document.getElementById('ListadoMuestras');
            
                    listaMuestras.innerHTML = "<h2>Muestras Solicitadas: </h2>";
                    
                    const listado = document.getElementById('listado');
                

                    listado.innerHTML += `<li>${valorParse.item}</li>
                    <input type="number" id="${valorParse.id}" class="ctdadMuestra" placeholder="Cant">`;
                    
                    
                
                }
        }
            
        
            let finalizarPedido = document.createElement("buttom");

            finalizarPedido.innerHTML += `<input type="button" id="btnFinPedido" value="Finalizar Pedido">`;

            document.body.append(finalizarPedido);

            
            finalizarPedido.addEventListener("click", calculoFinal);

            function calculoFinal(){

                pedidoFinalTotal = []; /* es una variable, dado a que sin este reset, ante un input vacio quedaria guardado en el array los no vacios */
                let cantPedido = document.getElementsByClassName("ctdadMuestra");
                
                for (const cantMuestra of cantPedido){
                    
                    
                    let queMuestra = cantMuestra.id;
                    const resultadoMuestra = muestrasObj.find((elemen) => elemen.id == queMuestra);
 
                    if (cantMuestra.value <0 || cantMuestra.value>100){
                        alert(`Para ${resultadoMuestra.item} debe seleccionar una cantidad entre 1gr o 100gr`);
                        return; /* intenté con || pero no me hace el return y sigue las funciones... */
                    }
                     if (cantMuestra.value){
                        

                        let pedidoFinalProducto = {
                            ...resultadoMuestra,
                            peso: cantMuestra.value
                        }

                        let {item, peso} = pedidoFinalProducto;
                        

                        pesoMuestras.push(cantMuestra.value);
                        
                        pedidoFinalTotal.push(" "+peso +"g de " + item);

                    }

                    else{
                        
                        console.log(cantMuestra.value || `NO HAY MUESTRAS EN ${resultadoMuestra.item}`);
                        /* Arriba: Linea innecesaria, sólo para presentar el desafio, será borrada más adelante...MENTIRA LO DEL RETURN INPLICITO, EL CODIGO CONTINUA COMO SI NADA */
                        alert(`Debe escribir una cantidad de muestra para ${resultadoMuestra.item}`);
                        return;
                    } 

                   
                    
                }

               
                alert("su pedido de" +pedidoFinalTotal+ " fue enviado correctamente");
                document.location.href = "./gracias.html";
            }
