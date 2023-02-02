/*
    Function() constructor

    * expresão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando'
    }
}

const Rodrigo = new Person('Rodrigo')
const joao = new Person('João')

console.log(Rodrigo.walk())
console.log(joao.walk())


function meuNome(nomeSobreNome) {
    console.log(nomeSobreNome)
}

meuNome('Rodrigo Faria Nunes')

function multiplicar(number1, number2) {
    document.write(number1 * number2)
}

multiplicar(5,20)