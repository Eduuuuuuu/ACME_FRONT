'use strict'

import {getFilmes, getFilmeById} from "./filmes.js";

function criarCard(filme) {
    const button = document.createElement('button')
    button.classList.add('bg-transparent', 'transform', 'hover:scale-105', 'duratio:300')
    const id = filme.id
    button.id = id
    button.onclick = setIdFilme
    const card = document.createElement('div')
    const imagem = document.createElement('img')
    imagem.src = filme.foto_capa
    imagem.classList.add('w-mdivposterw', 'h-mdivposrterh')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    titulo.classList.add('text-titulo', 'text-white', 'font-bold', 'grid', 'justify-start')
    card.append(imagem, titulo)
    button.append(card)

    return button
}

async function preencherContainer(){
    const container = document.querySelector('main')
    const filmes = await getFilmes()
    filmes.forEach(filme => {
        const card = criarCard(filme)
        container.appendChild(card)
        // console.log(filme)
    })
}

async function setIdFilme(){
    const idFilme = this.id
    localStorage.setItem('idFilme', idFilme)
    window.location.href = '../telas/descricao.html'
}

preencherContainer()