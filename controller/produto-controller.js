import { formatPrice } from "../formatterPrices.js";
import { produtoServices } from "../service/produto-servicos.js";

const novoProduto = (imageUrl, name, price, id) => {
    const card = document.createElement("div")

    const conteudo = `
    <div class="produto">
        <img class="produto__imagem" src="${imageUrl}" alt="img">
        <h1 class="product-name"> ${name} </h1>
        <p class="preco">${formatPrice (price)}</p>
        <a class="ver-produto" href="../produto.html?id=${id}">Ver Produto</a>
    </div>
    `

    card.innerHTML = conteudo
    card.dataset.id = id

    return card;
};

const produtos = document.querySelector("[data-product]")

const renderizar = async () => {
    try {
        const listaProduto = await produtoServices.listaProduto()
        listaProduto.forEach((elemento) => {
            produtos.appendChild(
                novoProduto(
                    elemento.imageUrl,
                    elemento.name,
                    elemento.price,
                    elemento.id
                )
            )
        })
    } catch (error) {
        console.log(error)
    }
}

renderizar()

