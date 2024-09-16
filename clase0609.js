/* CLASE 06-09 JS 3: FUNCTIONS & STRINGS

// A dia de hoy 16-09 tenemos relativamente bien trabajada esta oarte inicial de funciones y casi toda la clase tomada notas a mano por lo que aquí iran las curiosidades o ejercicios par ampliar

*/



// Problemas con el scope de las variables al trabajar con ellas en funciones

var myName = 'Juan Pablo'

function returnPersonName (name) {

    name = 'Julia'
    return name
}

console.log(returnPersonName(myName)) // Esta llama a la funcion por lo que la variable se actualiza
console.log(myName) // Esta linea no llama a la funcion por lo que el valor de la variable no se modifica



// Ejemplos de funciones varias
