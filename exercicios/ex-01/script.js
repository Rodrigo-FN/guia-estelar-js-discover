// 1. Declare uma variável de nome weight
let weight;  

// 2. que tipo de dado é a variável acima?
console.log(typeof weight) // undefined

// 3. Declare uma variável e atribua valores para cada um dos dados:
    // * name: String
    // * age: Number (integer)
    // * stars: Number (float)
    // * isSubscribed: Boolean
     
let nome, age, stars, isSubscribed;
nome = 'Rodrigo'
age = 26
stars = 4.9
isSubscribed = true

// 4. A variável student abaixo é de que tipo de dados?
    // Objeto

// 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

// 4.2 Mostre no console a seguinte menssagem:
    // <name> de idade <age> pesa <weight> kg.

    // ATENÇÃO, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

let student = {
    name: 'Rodrigo',
    age: 26, 
    weight: 115.5,
}

document.write(`${student.name} de idade ${student.age} peda ${student.weight} Kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []

/* 
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [student]

console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const Pedro = {
    nome: 'Pedro',
    age: 23,
    weight: 70.8, 
}

students = [student, Pedro]
console.log(students[1])