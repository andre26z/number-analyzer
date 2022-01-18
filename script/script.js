const num = document.querySelector('#num');
const add = document.querySelector('#add');
const list = document.querySelector('#list');
const fim = document.querySelector('#fim');

add.onclick = (e) => {
    e.preventDefault();
if (num.value == ''){    /*se não colocar nenhum número, alerta*/
    alert('Please enter a number');
    return;
}
const option = new Option(num.value); /* inclui nova opçao*/
list.add(option,undefined);  /*adiicona a lista*/
num.value = '';   /*o valor vai ser o que vc colocou no input*/
num.focus()
};

function finalizar(){
var values = Array.from(document.getElementById("list").options).map(e => e.value);
values.sort()  /* arrumar números em ordem crescente*/
document.getElementById("container").innerHTML = `Numbers sorted ${values}`;
document.getElementById("cad").innerHTML = `The amount of informed numbers are ${values.length}`

const min = Math.min(...values);
const max = Math.max(...values);

document.getElementById("maval").innerHTML = `The greater number is ${max}`
document.getElementById("meval").innerHTML = `The smallest number is ${min}`
document.querySelector("#sval").innerHTML = `The sum of the numbers is: ${somar()}  `
document.querySelector("#medval").innerHTML = `The average of the numbers is ${somar()/values.length}`


function somar() {
let soma = 0
for(let i in values){
    soma += Number(values[i])
}
return soma
}
function limpar(list) {
    var i, L = list.options.length - 1;
    for(i = L; i >= 0; i--) {
        list.remove(i);
    }
}
limpar(document.getElementById('list'));
}





