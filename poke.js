console.log('Poke Combination Generator 🍴')

const vegetales = ['Repollo','Rabano', 'Cebolla', 'Zanahoria', 'Pepino', 'Maiz', 'Wakame']

const frutas = ['Aguacate', 'Piña', 'Tomate Cherry']

const proteina = ['Salmon', 'Atun', 'Pulpo', 'Camarones']

const base = ['Arroz', 'Lechuga', 'Quinoa']

const crunch = ['Mani', 'Almendras', 'Merey']

vegetales.forEach(vegetal => {
    frutas.forEach(fruta => {
        proteina.forEach(prot =>{
            base.forEach(carbo => {
                crunch.forEach(pop => {
                    if(pop != 'Mani'){
                        console.log(`
                        🍟 poke: ${vegetal} ${fruta} ${prot} ${carbo} ${pop} 🥗
                        `)
                    }
                })
            })
        })
    })
})

