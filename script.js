/*let array
console.log('a. ',array)

array = null
console.log('b ',array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e ', array) 

const valor = array[i+6]
console.log('f ', valor)

const frase = prompt('Digite uma frase:')

console.log(frase.toUpperCase().replaceAll("A","I"), frase.length)


/* Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
Em seguida, Imprima no console a seguinte mensagem:

O e-mail 'emailDoUsuario' foi cadastrado com sucesso. 
Seja bem vinda(o), 'nomeDoUsuario'!


let nomeDoUsuario =  prompt("Qual o seu nome?")

let emailDoUsuario = prompt('Qual o seu e-mail?')

alert('O e-mail do ' + nomeDoUsuario + " foi cadastrado com sucesso" )

alert("Seja bem vinda (o) " + nomeDoUsuario + "!")




// 3.Faça um programa, seguindo os passos:

//a)Crie um array vazio e guarde-o em uma variável, chamada 'listaDeTarefas'
const listaDeTarefas = [] 

//b)Pergunte ao usuário 3 tarefas que ele precise realizar no dia armazene-as, uma por uma, no array  
listaDeTarefas = [prompt('Tarefa 1'),prompt('Tarefa 2'),prompt('Tarefa 3') ]
// mais simplificado 
const listaDeTarefas = [prompt('Tarefa 1'),prompt('Tarefa 2'),prompt('Tarefa 3') ]

// outra forma
listaDeTarefas [0] = prompt("Digite tarefa 1")
listaDeTarefas [1] = prompt("Digite tarefa 2")
listaDeTarefas [2] = prompt("Digite tarefa 3")

//c)Imprima o array no console
console.log(listaDeTarefas);

//d)Peça ao usuário que digite o "índice" de uma tarefa que ele já realizou: 0,1 ou 2
let indice = prompt('Digite um indice de 0 a 2:')

//e)Remova da lista o item de índice que o usuário escolheu. 
listaDeTarefas.splice(indice,1)

//f)Imprima o array no console
console.log(listaDeTarefas);
alert(listaDeTarefas);

*/





/*Resolução exercicio 3
const listaDeTarefas = [prompt('Tarefa 1'),prompt('Tarefa 2'),prompt('Tarefa 3') ]

console.log(listaDeTarefas)
alert(listaDeTarefas);

//let indice = prompt('Digite um indice de 0 a 2:')

listaDeTarefas.splice(indice,1)

console.log(listaDeTarefas);
alert(listaDeTarefas);
//

// 1) Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
let frase = prompt('Digite uma frase');
frase.trim;
let array = frase.split(' ');
alert(frase.split(' ') + '\n' + frase.split('') + '\n'+ frase.length ) ;
*/




/*2) Dado o array [ "Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do Array

let frutas = ['Banana','Morango','Abacaxi','Laranja','Ameixa']
let indice = frutas.indexOf('Abacaxi');
console.log(indice,frutas.length)

*/

/*3) Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
//Em seguida, siga os passos: 
let comidas = ['Pizza', 'Lasanha','Caviar','Xis','Cuscuz']

//a)Imprima no console o array completo
console.log(comidas)

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, *uma embaixo da outra* /
alert ('Essas são as minhas comidas preferidas: ' + '\n' + comidas[0] + '\n' + comidas[1] + '\n' + comidas[2] + '\n' + comidas[3] + '\n' + comidas[4])
//c)Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário.Imprima no console a nova lista

comidas[1] = prompt('Informe sua comida preferida:')
console.log(comidas)

//atribuindo comida com número de indice 'comidas[1]' com a informação do prompt, automaticamente ele irá substituir a posição atribuida

*/




// 4. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array. 
//Modifique os elementos do array de modo e a sequência de números ficar do contrário.
//Ou seja, se digitou: 1,2,3
//vai aparecer: 3,2,1
/*
let num1 = prompt('Digite numero 1');
let num2 = prompt('Digite numero 2');
let num3 = prompt('Digite numero 3');

let arrayNum = [num1, num2, num3]
console.log(arrayNum)
arrayNum = arrayNum.reverse()
console.log(arrayNum)
*/
let numeros = [prompt("digit 1"), prompt('digit2'), prompt('digit3')]
console.log(numeros)
numeros = numeros.reverse()
console.log(numeros)

