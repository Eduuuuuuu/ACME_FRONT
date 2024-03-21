'use strict'

import {getFilmes} from "./filmes.js";

function criarCard(filme) {
    const button = document.createElement('button')
    button.classList.add('bg-transparent')
    const id = filme.id
    button.id = id
    button.onclick = setIdFilme
    const card = document.createElement('div')
    const imagem = document.createElement('img')
    imagem.src = filme.foto_capa
    imagem.classList.add('w-mdivposterw', 'h-mdivposrterh')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    titulo.classList.add('text-titulo', 'text-white', 'font-bold')
    card.append(titulo, imagem)
    button.append(card)

    return button
}

async function preencherContainer (){
    const container = document.getElementById('lista_filmes')
    const filmes = await getFilmes()
    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        console.log(filme)
    })
}

async function setIdFilme(){
    const idFilme = this.id
    localStorege.setItem('idFilme', idFilme)
}

preencherContainer()