
// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("react")
// adicionar no começo
techs.unshift("nodeJs")
// remover do fim
techs.pop()
// remover do começo
techs.shift()

// pegar somente alguns elementos do array
//console.log(techs.slice(1,3))

// remover 1 ou mais itens em qualquer posição do array
//console.log(techs.splice(1,1))

// encontrar a posição de um elemento no array 
let index = techs.indexOf('js')
techs.splice(index, 2)



console.log(index)