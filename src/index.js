import { Personagem } from "./modules/personagem.js" 
import { PersonagemView } from "./components/personagemview.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoJorgin = new Mago('Jorgin',4, 'fogo', 4, 3)
const magoClaustro = new Mago('Claustro', 5, 'gelo',7, 10)
const arqueiroNami = new Arqueiro('Nami', 10, 6)
const arqueiroMagoBrook = new ArqueiroMago('Brook', 8, 7, 'Ar', 4, 8)
const guerreiroLuffy = new Guerreiro('Luffy', 10, 6)

const personagens = [magoJorgin, magoClaustro, arqueiroNami, arqueiroMagoBrook, guerreiroLuffy] /* personagemBrook*/
    
new PersonagemView(personagens).render()
