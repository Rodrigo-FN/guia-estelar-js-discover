let spendingSystems = {
    recipe: [ 1200, 1000, 800],

    expenses: [600, 500, 400, 200, 100 ]
}

function sum (array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateRecipe = sum(spendingSystems.recipe)
    const calculateExpenses = sum(spendingSystems.expenses)

    const total = calculateRecipe - calculateExpenses

    const itsOk  = total >= 0   

    let balanceText = "Negativo"

    if (itsOk) {
        balanceText = "Positivo"
    }

    document.write(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculateBalance()