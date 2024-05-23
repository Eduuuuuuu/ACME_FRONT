export async function getFilmes() {
    const url = 'http://localhost:8080/v2/ACMEFilmes/filmes'
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes
}

export async function getFilmeById(id){
    let url = `http://localhost:8080/v2/ACMEFilmes/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme
}

export async function postFilme(filme) {
    const url = 'http://localhost:8080/v2/ACMEFilmes/filme'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function deleteFilme(id) {
    const url = `http://localhost:8080/v2/ACMEFilmes/deleteFilme/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function putFilme (id, filme){
    console.log(id,filme)
    const url = `http://localhost:8080/v2/ACMEFilmes/update/${id}`
    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch (url,options)
    return response.ok
}

export async function getClassificacoes() {
    const url = 'http://localhost:8080/v2/ACMEFilmes/classificacoes'
    const response = await fetch(url)
    const data = await response.json()
    return data.classificacao
}