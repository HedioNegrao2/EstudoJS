// Valores verdadeiros

ativo = true
console.log(ativo)
ativo = 1 // Qualquer numero diferente de 0 é verdadeiro
console.log(!!ativo)
console.log(!! ' ')
console.log(!! [])
console.log(!! {})
console.log(!! Infinity)


// Valores verdadeiros
ativo = false
console.log(ativo)
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(ativo = false))
console.log( ''|| null ||0)


// Array 
const a = [1,3,9,2]
console.log(a,a[0],a[10])
a[10]= 5
console.log(a)
console.log(a.length)
a.push('teste',null,false)
console.log(a) 
delete a[0]
console.log(a)
a.pop()
console.log(a) 