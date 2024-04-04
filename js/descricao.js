'use strict'

import { getFilmeById } from "../js/filmes.js"

const id = localStorage.getItem('idFilme')

async function preencherTela(){

    const filmeArray = await getFilmeById(id)
    const filme = filmeArray[0]
    console.log(filme)

    document.title = filme.nome

    const body = document.querySelector('body')
    body.classList.add('h-bdyh', 'bg-background')

    const imagem = document.createElement('img')
    imagem.src = filme.foto_capa
    imagem.classList.add('h-imgh', 'w-imgw', 'pl-padding', 'pt-padding')

    const contents = document.createElement('div')
    contents.classList.add('flex', 'flex-col', 'justify-between')

    const header = document.createElement('div')
    header.classList.add('gap-divgap', 'flex-col', 'flex', 'pl-padding')

    const titles = document.createElement('div')
    const titulo = document.createElement('p')
    titulo.textContent = filme.nome
    titulo.classList.add('text-white', 'text-titulo', 'pt-padding')

    const sinopse = document.createElement('p')
    sinopse.textContent = filme.sinopse
    sinopse.classList.add('text-white', 'text-sinopse', 'w-sinopsew')

    const preco = document.createElement('p')
    preco.textContent = `R$${filme.valor_unitario}`
    preco.classList.add('text-white', 'text-sinopse')

    const btnAssistir = document.createElement('button')
    btnAssistir.textContent = 'Assistir'
    btnAssistir.classList.add('bg-yellow-500', 'rounded-btnr', 'text-black', 'h-btnh', 'w-btnw', 'text-btn')

    const footer = document.createElement('div')
    footer.classList.add('flex', 'flex-row', 'gap-divgap', 'pt-padding', 'pl-padding')

    const duracao = document.createElement('p')
    duracao.textContent = `Duração: ${filme.duracao}`
    duracao.classList.add('text-white', 'text-sinopse')

    const dataLancamento = document.createElement('p')
    dataLancamento.textContent = `Data de lançamento: ${filme.data_lancamento}`
    dataLancamento.classList.add('text-white', 'text-sinopse')

    footer.append(duracao, dataLancamento)
    titles.append(titulo, sinopse)
    header.append(titles, preco, btnAssistir)
    contents.append(header, footer)
    body.append(imagem, contents)
}

preencherTela()