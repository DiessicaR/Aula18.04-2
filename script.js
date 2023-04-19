let array
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
*/

let nomeDoUsuario =  prompt("Qual o seu nome?")

let emailDoUsuario = prompt('Qual o seu e-mail?')

alert('O e-mail do ' + nomeDoUsuario + " foi cadastrado com sucesso" )

alert("Seja bem vinda (o) " + nomeDoUsuario + "!")

/* 3.Faça um programa, seguindo os passos:
a)Crie um array vazio e guarde-o em uma variável, chamada 'listaDeTarefas'
b)Pergunte ao usuário 3 tarefas que ele precise realizar no dia armazene-as, uma por uma, no array  
c)Imprima o array no console
d)Peça ao usuário que digite o "índice" de uma tarefa que ele já realizou: 0,1 ou 2
e)Remova da lista o item de índice que o usuário escolheu. 
f)Imprima o array no console
*/


/* 1) Receba uma frase e retorneum array onde cada elemento é uma das palavras da frase, ignorando os espaços
2) Dado o array [ Banana Morango Abacaxi Laranja Ameixa], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanyto o tamanho do Array
3) Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos: 

a)Imprima no console o array completo
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, "uma embaixo da outra"
c)Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário.Imprima no console a nova lista
*/


/* 4. Crie u mscript que pergunte 3 n´puneris ai usuário, coloque em um array, depois exiba tal array. 
Modifique os elementos do array de modo e a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
vai aparecer: 3,2,1
* /

