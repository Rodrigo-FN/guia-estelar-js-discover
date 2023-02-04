// transformDegree ('50F')
function transformDegree (degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    // fluxo de error
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace('F', ''));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

    // fluxo alternativo C -> F
    if(celsiusExists) {
         updatedDegree = Number(degree.toUpperCase().replace('C', ''));
         formula = celsius => celsius *9/5 + 32
         degreeSing = 'F'
    }


    return formula(updatedDegree) + degreeSing
}

try {
    console.log(transformDegree('50c'))
    //transformDegree('100v')
} catch (erro) {
    console.error(erro.message)
}