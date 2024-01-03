import { Personagem } from "./modules/personagem.js" 
import { PersonagemView } from "./components/personagemview.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"

const magoJorgin = new Mago('Jorgin',4, 'fogo', 4, 3)
const magoClaustro = new Mago('Claustro', 5, 'gelo',7, 10)
const arqueiroNami = new Arqueiro('Nami', 10, 6 ,6 , 8)
/*const personagemBrook = new Personagem('Brook', 8, 7, 3, 'Guerreiro', 'Rock')
*/
const personagens = [magoJorgin, magoClaustro, arqueiroNami] /* personagemBrook*/
    
new PersonagemView(personagens).render()
