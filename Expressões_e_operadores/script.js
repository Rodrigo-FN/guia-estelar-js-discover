console.log('New')
/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String('Rodrigo');
let age = new Number(26);
let date = new Date('2023-02-03')
console.log(name, age, date)

//-------------------------------------------------------------------------------
console.log('Operadores unários')
/*
    Operadores unários
    typeof
    delete
*/

const person = {
    name: 'Angela',
    age: 54,
};

delete person.age

console.log(person)

//-------------------------------------------------------------------------------
console.log('Operadores Aritiméticos')
// Operadores Aritiméticos

// multiplicação
    console.log(2 * 5)
// divisão
    console.log(10 / 2)
// soma
    console.log(10 + 10)
// subtração
    console.log(20 - 15)

// resto da divisão
    console.log(100 % 6)
// incremento
    let n = 2
    console.log(++n)
// decremento
    console.log(--n)
// exponencial
    console.log(5 ** 2)

//-------------------------------------------------------------------------------
console.log('Grouping operator')
// Grouping operator ()

let total = (5 + 2) * 3
console.log(total)

//-------------------------------------------------------------------------------

console.log('operadores de comparação')
// operadores de comparação

// irá comparar valores e retonar um boolean como resposta à comparação

let one = 1;
let two = 2;

// == igual a 
    console.log(two == 1)
    console.log(one == "1")

// === estritamente idêntico
    console.log(one === "1")

// != diferente de
    console.log(one != two)
    console.log(one != 1)
    console.log(one != "1")

// !== estritamente diferente de
    console.log(two !== "2")
    console.log(two !== 2)
//-------------------------------------------------------------------------------

console.log('operadores lógicos');

// - 2 valores booleanos, quando vereficados,
// resultará em verdadeiro ou falso

let pao = true;
let queijo = true;

// AND &&
console.log(pao && queijo)

// OR ||
console.log(pao || queijo)

// NOT !
console.log(!pao) // reverte 

//-------------------------------------------------------------------------------

console.log('operador Condicional (ternário)');
//operador Condicional (ternário)

// dependendo da condição, nós recebemos valores diferentes

// condição então valor 1 se não valor 2 
// condition ? value1 : value2

// exemplos

// café da manhã top
let cafe = 'Pão com manteiga'
console.log(cafe == 'Pão com manteiga'? 'Café da manhã top' : 'Sem café da manhã :c' )

//maior de 18

let idade = 16;
console.log(idade >= 18 ? 'Pode entrar' : 'Não pode entra')

//-------------------------------------------------------------------------------

console.log('Operador de String (String operator)');
// Operador de String (String operator)


// concatenation (contatenação)
// Retorna a união duas Strings
let alpha = 'alpha'
console.log(alpha + 'bet' + 's')

//-------------------------------------------------------------------------------

console.log('Falsy and TRUTHY');
/*
    FALSY
    Quando um valor é considerado false em contextos onde em booleano é obrigatório ( condicionais e loops)
    
    false
    0
    -0
    ""
    null
    undefined
    NaN
 */
console.log(NaN ? 'VERDADEIRO' : 'FALSO')

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde em booleano é obrigatório ( condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
 */ 
console.log(-Infinity ? 'Verdadeiro' : 'False')

//-------------------------------------------------------------------------------

console.log('Operator precedence')
/* 
    Operator precedence
    precedência de operadores

    * grouping                  ()
    * negação e incremento      ! ++ --
    * multiplicação e divisão   * /
    * adição e subtração        + - 
    * relacional                < <= > >=
    * igualdade                 == != === !==
    * AND                       &&
    * OR                        ||
    * condicional               ?:
    * assignment (atribuição)   = += -= *=
*/ 