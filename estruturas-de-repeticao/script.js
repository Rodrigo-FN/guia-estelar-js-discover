// for...in

let  person = {
    name: 'Rodrigo',
    age: 26,
    weight: 115.6 
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}