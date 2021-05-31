//1 Crie um array que receba 5 itens e exiba no console.
let itens = ['Gato', 'Papagaio', 'Periquito', 'Tamanduá', 'Onitorrinco'];
console.log(itens);

//2 Utilize um método para adicionar um nome ao inicio do array.
itens.unshift('Peixe boi')
console.log(itens)

//3 Utilize um método para remover o último nome do array.
itens.pop();
console.log(itens)

//4 Utilize um método para adicionar dois nomes ao fim do array.
itens.push('Tamanduá', 'Onitorrinco');
console.log(itens)

//5 Utilize um método para remover o primeiro nome do array.
var remove_ultimo = itens.shift();
console.log(itens)

//6 Utilize um método para organizar em ordem crescente o seguinte array:
// const numbers = [7,5,6,3,8,9,2,1,4]
const numbers = [7,5,6,3,8,9,2,1,4,20];
numbers.sort((a,b) => a-b);
console.log(numbers)