//Crie uma função que receba um valor e uma porcentagem como parâmetros. A função deve retornar o valor acrescido da porcentagem indicada.
// A ideia é criar uma solução para estudante iniciante de Linguagem de Programação, por isso os valores foram passados desta forma

resultado = valor(80, 20)

console.log("O resultado da operação é: " + resultado)

function valor(money, porcentagem) {
    let calculo = money + (money * (porcentagem / 100))
    return calculo
}
