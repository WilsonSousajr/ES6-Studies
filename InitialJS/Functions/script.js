function areaQuadrado(lado){
    return lado * lado
}

console.log(areaQuadrado(5))

let print =  (message) => {
    console.log(message)
}

print("Hello World!")

document.addEventListener('click', () => {
    console.log("Clicou!")
})

// Crie uma função para verificar se um valor é Truthy

function isTruthy(arg)
{
    if(!!arg === true)
    {
        console.log("Is Truthy!")
        return
    }
    else
    {
        console.log("Isn't Truthy!")
        return
    }
}

isTruthy('Five')

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function squarePerimeter(side_1, side_2, side_3, side_4)
{
    if(typeof side_1 !== 'number' || typeof side_2 !== 'number' || typeof side_3 !== 'number' || typeof side_4 !== 'number')
    {
        console.log('Only numbers are accepted.')
        return
    }
    else{
        let total = side_1 + side_2 + side_3 + side_4
        console.log(`The perimeter is ${total}`)
        return
    }
}

squarePerimeter(1,2,3,4)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function fullName(first_name, last_name)
{
    let fullName = first_name + ' ' + last_name
    console.log(`Your full name is ${fullName}`)
}

fullName('Wilson', 'Sousa')

// Crie uma função que verifica se um número é par

function isEven(number){
    if(number % 2 === 0)
    {
        console.log('Is even!')
    }
    else
    {
        console.log('Is odd!')
    }
}

isEven(3)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function typeOfThis(arg)
{
    let type = typeof(arg)
    return type
}

console.log(typeOfThis(2))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', () => {
    console.log("Wilson Sousa")
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20))
console.log(jaVisitei(20))
