const numero = Number(prompt('Digite um número:')) 
const numeroTitulo = document.getElementById('numero-titulo') 

const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero 
texto.innerHTML = 
`<p>Seu número + 2 é: <b>${(numero + 2)}</b></p>
<p>A raiz quadrada de ${numero} é: <b>${(Math.sqrt(numero)).toFixed(2)}</b> </p>
<p>${numero} é inteiro? <b>${Number.isInteger(numero)}</b></p>
<p>Arredondando para baixo: <b>${Math.floor(numero)}</b></p>
<p>Arredondando para cima: <b>${Math.ceil(numero)}</b></p>
<p>Com duas casas decimais: <b>${(numero).toFixed(2)}</b></p>
`