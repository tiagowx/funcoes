//valores padrão
function exponencial(array, num = 1) { //se num não for passado como parametro ele assume o valor de 1;
    const result = []
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** num)
    }

    return result
}

exponencial([1, 2, 3, 4])
exponencial([1, 2, 3, 4], 4)

//objeto "arguments"
//array com todos os argumentos passados ao invocar função
function findMax() {
    let max = -Infinity
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max
}
findMax(1, [2, 3], "quatro")

// Spread: desmembra argumentos passados 
function sum(x, y, z) {
    return x + y + z
}
const numbers = [1, 2, 3]
console.log(sum(...numbers))

// Rest: combina argumentos em um array
function confereTamanho(...args) {
    console.log(args.length)
}
confereTamanho() //0
confereTamanho(1, 2) //2
confereTamanho(1, 2, 4) //3

//object destructuring
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firtName: 'John',
        lastName: 'Doe',
    }
}

function userId({ id }) {
    return id
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
    return `${first} ${last}`
}
userId(user)
getFullName(user)