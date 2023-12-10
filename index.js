console.log("Qual o neu nick name?")
const name = "João Matador De Porco"
console.log("Qual a sua idade?")
const age = 10


console.log(" selecione sua classe, 1 - guerreiro, 2 - mago, 3 - monge, 4 - ninja")
let result = 4
let hero = herois(result)

function herois(herois){
    if(herois === 1){
        let hero = ["guerreiro", "espada", "espada"]
        
        return hero
    }
    else if(herois === 2){
        let hero = ["mago", "magia", "escudo"]
        return hero}

  
    else if(herois === 3){
        let hero = ["monge", "artes marciais", "cajado"]
        return hero}
    else if(herois === 4){
        let hero = ["ninja", "shuriken", "jutsu"]
        return hero}
    }
    class guerreiro{
        constructor(clase, atack){
            this.clase = clase
            this.atack = atack
        }
        escrever(){
            console.log(`o ${this.clase} atacou usando ${this.atack}`)
        }
       
    }
    class defeza{
        constructor(clase, def){
            this.clase = clase
            this.def = def
        }
        escrever(){
            console.log(`o ${this.clase} defendeu usando ${this.def}`)
            
        }
       
        
    }


console.log("1 - atacar, 2 - bloquear")
let resultAcao = 1


    
class acao{
    constructor(){
    switch(resultAcao){
        case(resultAcao = 1):            
            let atacar = new guerreiro (hero[0], hero[1])
            atacar.escrever()
            
            break;
        case(resultAcao = 2):
            
            let defender = new defeza (hero[0], hero[2])
            defender.escrever()
            break;
        }
        
    }
}
let agir = new acao ()



