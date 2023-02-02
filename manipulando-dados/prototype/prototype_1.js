/**
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
    
    Type conversion (typecasting) vs type coersion

    * Alteração de um tipo de dado para outro tipo

 */

    console.log(Number('9') + 5)

//---------------------------------------------------------------------------

/*
    Manupulando String e números
    Transformar String em número e número em String
*/

let string = '123'
console.log(Number(string) ) // String >>> Number

let number = 321
console.log(String(number)) // Number >>>> String

//---------------------------------------------------------------------------

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = 'Olá mundo!'
console.log(word.length)

let numberQualquer = 5456
console.log(String(numberQualquer).length)

//---------------------------------------------------------------------------

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let numberBreak = 46.8546464699
console.log(numberBreak.toFixed(2).replace('.', ','))

//---------------------------------------------------------------------------

// Tranformar letras minúsculas em maiúsculas. Faça o contrário disso também

let textoProgramar = 'Programar é muito bacana!'
console.log(textoProgramar.toUpperCase())
console.log(textoProgramar.toLowerCase())

//---------------------------------------------------------------------------

// Separe um texto que contem espaçõs, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto onde eram espaços. coloque _

let phrase = 'Eu quero viver o Amor!'
let myArray = phrase.split(' ')
let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore.toUpperCase())

//---------------------------------------------------------------------------

// Verificar se o texto contém a palavra Amor

let phraseAmor = 'Eu quero viver!'
console.log(phraseAmor.includes('Amor'))

//---------------------------------------------------------------------------

// Criar Array com construtor

let myArrayContructor = new Array('a', 'b', 'c')
console.log(myArrayContructor)

//---------------------------------------------------------------------------

// Contar elementos de um Array

console.log(['a', 'b', 'c',].length)

//---------------------------------------------------------------------------

// Transforma uma cadeia de caracteres em elementos de um array

let wordManipulacao = 'Manipulação'
console.log(Array.from(wordManipulacao))

//---------------------------------------------------------------------------

// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim

// adicionar no começo
// remover do fim
// remover do começo
// pegar somente alguns elementos do array
// remover 1 ou mais itens em qualquer posição do array
// encontrar a posição de um elemento no array 