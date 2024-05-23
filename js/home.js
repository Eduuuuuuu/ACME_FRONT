'use strict'

import {getFilmes, getFilme,postFilme, deleteFilme} from "./filmes.js"

const idFilme = localStorage.getItem('idfilme')
console.log(idFilme)


async function preencherCampos(id) {
    const filme = await getFilme(id)
    console.log(filme);
    let stringGeneros = ''

    const listaGenerosFilmes = filme.generoFilmes
    if (listaGenerosFilmes) {
        listaGenerosFilmes.forEach(genero => {
            stringGeneros += genero.nome + ", "
        });
    } 

    console.log(stringGeneros)
    const filho2 = document.createElement('div')

    const generosText = document.createElement('p')
    generosText.classList.add('text-2xl', 'text-center', 'text-red-300', 'pb-[0px]', 'pl-[850px]')
    generosText.textContent = stringGeneros.slice(0, stringGeneros.length - 2)

    const sinopse = document.createElement('p')
    sinopse.textContent = filme.sinopse
    sinopse.classList.add('text-[20px]', 'text-white', 'bottom-[450px]', 'text-justify', 'w-[590px]', 'fixed', 'left-[760px]' )
 
    const titulo = document.createElement('h1')
    titulo.textContent = filme.nome
    titulo.classList.add('text-4xl', 'text-center', 'text-red-300', 'pb-[375px]', 'pl-[850px]')
   
    const valorD = document.createElement('div')
    valorD.classList.add('text-red-700', 'text-2xl', 'pt-[7px]', 'bg-red-200', 'w-[170px]', 'h-[50px]', 'text-center', 'fixed', 'left-[570px]', 'rounded-lg', 'inline-block', 'align-middle')
    const valor = document.createElement('p')
    valor.textContent = `Valor : R$:${filme.valor_unitario}`
    valorD.append(valor)

    const duracaoD = document.createElement('div')
    duracaoD.classList.add('text-red-700', 'text-2xl' , 'pt-[7px]','bg-red-200' , 'w-[500px]', 'h-[50px]', 'text-center', 'fixed', 'left-[800px]','rounded-lg', 'inline-block', 'align-middle')
    const duracao = document.createElement('p')
    duracao.textContent = `Duração: ${filme.duracao.substring(11,19)}`
    duracaoD.append(duracao)
    
    const dataLancamento = document.createElement('div')
    dataLancamento.classList.add('text-red-700', 'text-2xl', 'pt-[7px]', 'bg-red-200', 'w-[540px]', 'h-[50px]', 'text-center', 'fixed', 'left-[1360px]', 'rounded-lg', 'inline-block', 'align-middle')
    const data = document.createElement('p')
    data.textContent = `Lançamento: ${filme.data_lancamento.substring(0,10)}`

    dataLancamento.append(data)
    
    filho2.append(titulo, generosText,sinopse, valorD,duracaoD,dataLancamento)

    return filho2
}

const fotoTitulo = async(id) => {
    const filme = await getFilme(id)
    console.log(filme);

    const filho1 = document.createElement('div')
    filho1.classList.add('ml-[90px]', 'posterFilme', 'bg-[#]', 'top-[150px]', 'max-w-[400px]', 'max-h-[800px]', 'text-[#FFFFFF]', 'h-fit', 'fixed', 'flex-col', 'items-center', 'border-2', 'border-[#FFFFFFFF]', 'mt-[20px]')
   
    const poster = document.createElement('img')
    poster.classList.add('min-w-[400px]','max-h-[700px]', 'fixed', )
    poster.src = filme.foto_capa

    filho1.append(poster)

    return filho1
}

async function preencherContainer() {
    const container = document.getElementById('pai')
    container.classList.add('gap-8')

        const card = await fotoTitulo(idFilme)
        const cardG = await preencherCampos(idFilme)
        
        container.append(card, cardG)
}

preencherContainer()