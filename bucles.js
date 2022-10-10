const friends = ['Miguel', 'Alexander', 'Juan Carlos', 'Manuel', 'Julio', 'Victor', 'Jesus', 'Alfredo', 'Samuel']

//valor inicial, condicion critica, condicion incremental
for(let i = 1; i < 100; i=i+2){
    //console.log('Hola ',i)
}

//for of se para cada elemento de la lista y nos acceso al elemento en ese instante de ejecucion
for(let friend of friends){ //
    //console.log('Hola ' + friend) // item or object
}

// se repite para el indice de cada elemento de lista
for(let friend in friends){ //
    //console.log('Hola ' + friend) // number
}

//ejecuta una funcion para cada elemento y devuelve indefinido
friends.forEach(person => console.log('Chao '+person))

//Map devuelve una transformacion de cada elemento del arreglo
let resultado = friends.map(person => 'Pasajero '+person)

console.log(resultado)