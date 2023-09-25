//get
const listaProduto = () => {
    return fetch('http://localhost:3000/produto')
        .then((resposta) => resposta.json())
        .catch((error) => console.log(error))
}

//post
const criarProduto = (imageUrl, name, price,) => {
    return fetch('http://localhost:3000/produto', {
        method: "POST",
        headers: {
            "content-Type": "application-json"
        },
        body: JSON.stringify({
            imageUrl,
            name,
            price
        })
    }).then((resposta) => {
        if(resposta.ok) {
            return resposta.body
        }
        throw new Error("Não foi possivel criar um produto")
    })
        
}

export const produtoServices = {
    listaProduto,
    criarProduto,
}