'use strict'

import { getFilmes, deleteFilme, putFilme, postFilme } from "./filmes.js"
const listaFilme = await getFilmes()
const container = document.getElementById('container')

function criarFilme(info) {

    const filme = document.createElement('div')
    filme.classList.add('h-20', 'border-b-4', 'border-[#fffffff]', 'grid', 'grid-cols-4', 'place-items-center')

    const id = document.createElement('h1')
    id.classList.add('text-[#ffffff]', 'text-3xl')
    id.textContent = info.id_filme

    const produto = document.createElement('p')
    produto.textContent = info.nome
    produto.classList.add('text-[#ffffff]', 'text-3xl')

    const valor = document.createElement('p')
    valor.classList.add('text-[#ffffff]', 'text-3xl')
    valor.textContent = 'R$' + info.valor_unitario

    const icones = document.createElement('div')
    icones.classList.add('text-[#fffffff]', 'text-3xl', 'flex','gap-4')

    const iconeEditar = document.createElement('i')
    iconeEditar.classList.add('bx', 'bx-pencil', 'cursor-pointer', 'text-[#ffffff]')

    const iconeDeletar = document.createElement('i')
    iconeDeletar.classList.add('bx','bxs-trash-alt', 'text-[#ffffff]', 'cursor-pointer') 
    const iconeAdicionar = document.createElement ('i')
    
    iconeAdicionar.classList.add('bx', 'bx-plus-medical', 'text-[#ffffff]')
    iconeAdicionar.id = 'add'

    icones.replaceChildren(iconeEditar, iconeDeletar, iconeAdicionar)
    filme.replaceChildren(id, produto, valor, icones)
    container.appendChild(filme)

    iconeEditar.addEventListener('click',() => {
        window.location.href = '../telas/editar.html?id=' + info.id_filme
    })

    iconeDeletar.addEventListener('click',() => {
        deleteFilme(info.id_filme)
        window.location.reload()
    })

    iconeAdicionar.addEventListener('click', () => {
        window.location.href = '../telas/cadastrar.html'
    })
}

const add = document.getElementById('add')

listaFilme.forEach(filme => {
    criarFilme(filme)
});