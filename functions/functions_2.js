// function scope
let subject = 'Create video'

function createThink(subject) { // Esse subject tem um significado nesse scope
    subject = 'Study'
    return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)