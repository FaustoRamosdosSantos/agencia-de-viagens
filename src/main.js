import { hero } from './hero.js'
import { sobre } from './sobre.js'
import { destinos } from './destinos.js'
import { contato } from './contato.js'
import { iniciarComportamentos } from './comportamentos.js'

document.querySelector('#app').innerHTML = `
${hero('./')}
${sobre()}
${destinos()}
${contato()}
`

// Só depois de desenhar as seções: carrossel, animações e menu precisam dos elementos na página
iniciarComportamentos()
