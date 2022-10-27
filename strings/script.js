// ***** CONCAT *****
//let string = 'Um texto'
// console.log(string.concat('em um lindo dia'))
// console.log(string + ' em um lindo dia')
// console.log(`${string} em um lindo dia`)

// ***** IndexOf ****
// console.log(string.indexOf('o', 3));
// console.log(string.lastIndexOf('o',3 ));


//***** MATCH *****
//console.log(string.match(/[a-z]/g));


// let umaString = 'O rato roeu a roupa do rei de Roma'


//**** REPLACE *****
//console.log(umaString.replace(/r/g, '#'));


//***** SLICE ****
//console.log(umaString.slice(2,6));


//***** SPLIT *****
// console.log(umaString.split(' ', 2));

//**** toUpperCase/toLowerCase *****
// // console.log(umaString.toLowerCase());

// const nome = prompt('Digite seu nome completo')
// document.body.innerHTML += `O seu nome é <strong>${nome}</strong><br />`
// document.body.innerHTML += `O seu nome tem<strong> ${nome.replaceAll(" ", "").length}</strong> letras <br />`
// document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong><br />`
// document.body.innerHTML += `Qual o primeiro índice da letra a do seu nome: <strong>${nome.indexOf('a')}</strong><br />`
// document.body.innerHTML += `Qual o último índice da letra a do seu nome: <strong>${nome.lastIndexOf('a')}</strong><br />`
// document.body.innerHTML += `As últimas três letras do seu nome são: <strong>${nome.slice(-3)}</strong><br />`
// document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong><br />`
// document.body.innerHTML += `O seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br />`
// document.body.innerHTML += `O seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br />`

function aux(a){
    a =a -1
    console.log(a);
    if(a>0)
    aux(a)
}
console.log(aux(5));
