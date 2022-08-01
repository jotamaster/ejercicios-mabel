console.log('test')

function getFullname (name, lastname){  
    return `${name} ${lastname}.`
}

let myFullname = getFullname('Mabel','Soto')

console.log(getFullname('Mabel','Soto'))

console.log(myFullname)


function getFullname (name, lastname){  
    return `${name} ${lastname}.`
}

let getRaizCuadrada = num =>  num * num

// function getRaizCuadrada(num ){
//     return  num*num
// }

console.log(getRaizCuadrada(5))