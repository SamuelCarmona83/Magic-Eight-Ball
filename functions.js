//el oraculo
let respuestas = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.',
]

let geek = ['Miguel', 'Jesus', 'Juan Carlos', 'Alexander', 'Manuel', 'Samuel']

//definicion de la funcion
function ContarPosiciones(Lista){//parametros 
    //bloque de codigo
    let contador = 0
    while(Lista[contador] != undefined){//verdadera condicion critica
        contador = contador + 1
        // if(contador == 7){
        //     return 'SIUUUUUU'
        // }
    }
    //console.log('Posiciones Contadas', contador)//argumentos
    //return undefined valor por defecto de retorno
    return contador
}



console.log( ContarPosiciones(respuestas) )