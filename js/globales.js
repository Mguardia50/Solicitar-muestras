let i=0
const verificador = [];
const sumatoria = [];
const pedidoFinal = [];
let pedidoFinalconcat = [];

const portfolio = [
    {id: 1, item: "natamicina", precio: 170},
    {id: 2, item: "Beta Caroteno", precio: 150},
    {id: 3, item: "Sucralosa", precio: 92},
    {id: 4, item: "Acesulfame K", precio: 15.8},
    {id: 5, item: "Dioxido de titanio", precio: 14.5},
    {id: 6, item: "Ácido Cítrico", precio: 4.5}
    ];

let tabla = document.getElementsByClassName("tabla");

alert("solicite hasta 5 muestras de producto")

tabla[0].innerHTML = "Por favor ingrese las muestras";

const contenedorMuestras = document.getElementById("contenedorMuestras");
const btnContinuarPedido = document.getElementById("continuarPedido");
const contadorMuestras = document.getElementById('contadorMuestras');
