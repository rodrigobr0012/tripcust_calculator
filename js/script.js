//dom


const dist = document.querySelector("#distancia");
const rend = document.querySelector("#rendimento");
const prec = document.querySelector("#preco");
const calcu = document.querySelector("#calcular");
const result = document.querySelector("#resultado");

//events

calcu.addEventListener('click',calcularGasolina)


//functions 

function calcularGasolina(){
    event.preventDefault()

    let valor1  = dist.value 
    let valor2  = rend.value 
    let valor3  = prec.value 

//calc of the spend value

let finalvalor = (valor1/valor2)*valor3


result.innerHTML = `<h1>will cust $ ${finalvalor}</h1>`
}