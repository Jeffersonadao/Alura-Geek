import { produtoServices } from "../service/produto-servicos.js"

const formulario = document.querySelector('[data-criarProduto]')

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const url = document.querySelector('[data-url]').value
    const nome = document.querySelector('[data-nome]').value
    const preco = document.querySelector('[data-preco]').value

    produtoServices
        .criarProduto(url, nome, preco)
        .then((resposta) => {
            window.location.href = '../index.html'
            console.log(resposta)

        })
        .catch(err => {
            console.log(err)
        })
})