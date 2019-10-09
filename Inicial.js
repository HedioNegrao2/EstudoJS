console.log('Teste')
// 
/* blocos  */
{

}

// Variávis
var nome = 'Jose'
let nome2 = "Maria" 
const nome3 = 'Ana'
console.log(typeof nome3 )
console.log(nome3.charAt(0), nome3.indexOf('a'))
console.log('Novo'.concat(' - valor'))
let numero = 5.0
console.log(numero)
console.log(typeof numero )
let numero2 = Number(2.33)
console.log(numero2)
console.log(typeof numero2 )
console.log(Number.isInteger(numero2)  )
console.log(Number.isInteger(numero)  )

total = numero / numero2
console.log(total.toFixed(1))
console.log(total.toString())
console.log(typeof Math)

let pessoa = 'Julia'

let saudacao = 'Olá '+ pessoa
let saudacao2 =  `
Ola
${pessoa}
`
console.log(saudacao,saudacao2)
console.log(` 5 + 5 = ${5 +5}`)

let ativo = false
console.log(ativo)