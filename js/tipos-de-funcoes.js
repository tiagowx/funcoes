//padrão sem retorno
function hello() {
    console.log('Ola mundo!')
}

//padrão com returno
function helloR() {
    return 'Ola mundo!'
}
console.log(helloR())

//padrão com parâmetros
function soma(a, b) {
    return a + b
}
console.log(soma(2, 3))

//anônima
const fun = function(a, b) {
    console.log('enviado' + a)
    return true
}
fun(3, 2)

//autoinvocável
(
    function() {
        let name = 'DIO'
        return name
    }
)()

//autoinvocável com parâmetros
(
    function(a, b) {
        return a + b
    }
)(3, 2)

//callback
const calc = function(cb, a, b) {
    return cb(a, b)
}
const soma = function(a, b) {
    return a + b
}
const sub = function(a, b) {
    return -b
}
console.log(calc(sub, 3, 2))
console.log(calc(soma, 2, 3))