'use strict'

import { getFilmes, getFilmeById, postFilme, deleteFilme} from "./filmes";

function criarCard(filme) {
    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    const texto = document.createElement('textarea')
    texto.textContent = filme.sinopse
    card.append(titulo, texto)

    return card
}

async function preencherContainer (){
    const container = document.querySelector('body')
    const filmes = await getFilmes()
    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })
}

preencherContainer()

// const filme = {

//             "nome": "Teste",
//             "sinopse": "Lenny (Adam Sandler), Eric (Kevin James), Kurt (Chris Rock) e Marcus (David Spade) voltam a morar na mesma cidade. Lá, suas vidas seguem o curso natural dos adultos, seja pela existência dos problemas com as esposas para uns, com os filhos para outros, ou tudo junto e misturado. A coisa dá uma complicada quando os marmanjos pretendiam matar a saudade num dia de folga e acabam encarando os jovens da região, que agora dominam o lugar. É quando eles acabam tendo que enfrentar alguns fantasmas do passado, entre eles a covardia diante de valentões e o famigerado bullyng na escola. Mas algumas surpresas estão para acontecer, como a chegada de um filho rebelde para Marcus domar, uma possível gravidez e uma festa de arromba, que não vai deixar pedra sobre pedra.",
//             "duracao": "01:41:00",
//             "data_lancamento": "2013-08-16",
//             "data_relancamento": null,
//             "foto_capa": "https://br.web.img3.acsta.net/c_310_420/pictures/210/049/21004903_20130510170049514.jpg",
//             "valor_unitario": 55
//         }

deleteFilme()