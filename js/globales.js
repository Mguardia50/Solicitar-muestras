let i=0
const verificador = [];
const sumatoria = [];
const pedidoFinal = [];
const portfolio = [];


//El siguiente código lo dejo sólo para mostrar lo que se remplazo:
/* const portfolio = [
    {id: 1, item: "natamicina", precio: 170},
    {id: 2, item: "Beta Caroteno", precio: 150},
    {id: 3, item: "Sucralosa", precio: 92},
    {id: 4, item: "Acesulfame K", precio: 15.8},
    {id: 5, item: "Dioxido de titanio", precio: 14.5},
    {id: 6, item: "Ácido Cítrico", precio: 4.5}
    ]; */

let tabla = document.getElementsByClassName("tabla");

Toastify({
    text: "Solicite hasta 5 muestras",
    duration: 5000,
    style: {
        color: "white",  
        background: "linear-gradient(to right, #211522, #613659, #C197D2)",
      }
}).showToast();



const contenedorMuestras = document.getElementById("contenedorMuestras");
const btnContinuarPedido = document.getElementById("continuarPedido");
const contadorMuestras = document.getElementById('contadorMuestras');
