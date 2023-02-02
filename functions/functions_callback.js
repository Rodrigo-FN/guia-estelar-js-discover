// callback function

function sayMyName(nam2) {
    console.log('antes de executar uma função callback')

    nam2()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)