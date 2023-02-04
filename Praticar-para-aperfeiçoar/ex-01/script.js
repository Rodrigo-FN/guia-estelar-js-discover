let aluno = 101

function getScore(aluno) {
    let gradeA = aluno >= 90 && aluno <= 100
    let gradeB = aluno >= 80 && aluno <= 89
    let gradeC = aluno >= 70 && aluno <= 79
    let gradeD = aluno >= 60 && aluno <= 69
    let gradeF = aluno < 60 && aluno >= 0

    let scoreFinal;

    if(gradeA) {
        document.write('A')
    }else if (gradeB) {
        document.write('B')
    }else if (gradeC) {
        document.write('C')
    }else if (gradeD) {
        document.write('D')
    }else if(gradeF) {
        document.write('F')
    } else {
        document.write('Nota Inválida!')
    }

    return scoreFinal
}

getScore(56)