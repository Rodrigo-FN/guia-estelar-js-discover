// throw
function sayMyName (name = ''){
    if (name === '') {
        throw new Error("Nome é necessário")
    }

    console.log(name)
}
// try...catch
try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após a função de erro')