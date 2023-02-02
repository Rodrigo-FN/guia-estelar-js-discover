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