// Variáveis e tipos de dados
// declaração or declaration
var nome = "Rodrigo"

// assignment or atribuição de valores

// que tipo de dado foi colocado na variável

//console.log(typeof nome) // string

// agrupamento de declarações
let age, isHuman

age = 26
isHuman = true
console.log(nome, age, isHuman)

// concatenando valores
console.log(`Meu nome é ${nome}, tenho ${age} anos e sou humano, ${isHuman}.`)


// Objeto
const person = {
    nameP: 'Rodrigo',
    age: 26,
    weight: 88.6,
    isAdmin: true
}

document.write(`${person.nameP} tem ${person.age} anos!<br>`)

// Array

const animals = ['Lion', 'Monkey', 'Cat']

document.write(animals[0] + '<br>')
document.write(animals[2] + '<br>')
document.write(animals.length)