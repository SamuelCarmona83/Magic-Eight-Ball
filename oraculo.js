
const MagicEightBall = {
    answers: [
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
    ],
    prediction: function destiny(){
        return this.answers[parseInt(Math.random()*this.answers.length)]
    }
}

//progamacion funcional

//progamacion de alto nivel

//Componentes son una funcion

//Funcion Constructora

let prediccion1 = MagicEightBall.prediction()

let prediccion2 = MagicEightBall.prediction()

console.log(prediccion1, prediccion2)