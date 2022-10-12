console.log('Poke Combination Generator 🍴')

const vegetales = ['Repollo','Rabano', 'Cebolla', 'Zanahoria', 'Pepino', 'Maiz', 'Wakame']

const frutas = ['Aguacate', 'Piña', 'Tomate Cherry']

const proteina = ['Salmon', 'Atun', 'Pulpo', 'Camarones']

const base = ['Arroz', 'Lechuga', 'Quinoa']

const crunch = ['Mani', 'Almendras', 'Merey']

let pokesWithQuiona = []

vegetales.forEach(vegetal => {
    frutas.forEach(fruta => {
        proteina.forEach(prot =>{
            base.forEach(carbo => {
                crunch.forEach(pop => {
                    if(carbo == 'Quinoa')
                        pokesWithQuiona.push(`${vegetal} ${fruta} ${prot} ${carbo}`)
                    /*console.log(`                                           
                    🍟 poke: ${vegetal} ${fruta} ${prot} ${carbo} ${pop == 'Mani' ? pop : '🍺'} 🥗
                    `)*/
                })
            })
        })
    })
})


console.log(pokesWithQuiona)
