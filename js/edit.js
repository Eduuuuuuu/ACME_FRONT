'use strict'

import { getFilmes, getFilmeById, postFilme, putFilme, getClassificacoes } from "./filmes.js"
const id = new URLSearchParams(window.location.search).get('id')
        const nome = document.getElementById('nome')
        const sinopse = document.getElementById('sinopse')
        const lancamento = document.getElementById('lancamento')
        const relancamento = document.getElementById('relancamento')
        const duracao = document.getElementById('duracao')
        const valor = document.getElementById('valor')
        const poster = document.getElementById('poster')
        const classifi = document.getElementById('classificacao')
        

        const listaClassificacoes = await getClassificacoes()
        listaClassificacoes.forEach(classificacao => {
            console.log(classificacao);
            const option = document.createElement('option')
            option.value = classificacao.id_classificacao
            option.textContent = classificacao.faixa_etaria
            classifi.appendChild(option)
        });
        
async function dadosFilme() {

    if (id) {

        const getFilme = await getFilmeById(id)
        const infoFilme = getFilme[0]

        nome.value = infoFilme.nome
        console.log(infoFilme);
        sinopse.textContent = infoFilme.sinopse
        duracao.value = tratarDuracao(infoFilme.duracao)
        
       
        poster.src = infoFilme.foto_capa
       
        valor.value = infoFilme.valor_unitario
        lancamento.value = infoFilme.data_lancamento.slice(0, 10)
        relancamento.value = infoFilme.data_relancamento
        classifi.value = infoFilme.classificacao[0].id_classificacao
        const salvar = document.getElementById('salvar')

        salvar.addEventListener('click', async () => {

            const nomeInput = nome.value;
            const sinopseInput = sinopse.value;
            const duracaoInput = duracao.value
            const dataLancamentoInput = lancamento.value;
            const dataRelancamentoInput = relancamento.value;
            const precoInput = valor.value;
            const fotoCapaInput = poster.src;
            const classifiInput = classifi.value

            const alteracoes = {
                nome: nomeInput,
                sinopse: sinopseInput,
                duracao: duracaoInput,
                data_lancamento: dataLancamentoInput,
                data_relancamento: dataRelancamentoInput,
                valor_unitario: precoInput,
                foto_capa: fotoCapaInput,
                id_classificacao: classifiInput
       
            }

            const result = await putFilme(id, alteracoes)
            if(result){
                window.location.href = '../telas/cms.html';
            } else {
                alert("Deu erro aí, fi")
            }
        
        });

    } else {
        return false
    }  
}
function tratarDuracao(string) {
    const stringTratada = string.slice(11, 19)
    return stringTratada
}

const link = document.getElementById('link')

link.addEventListener('keyup', () => {

    poster.src = link.value 
})

dadosFilme()