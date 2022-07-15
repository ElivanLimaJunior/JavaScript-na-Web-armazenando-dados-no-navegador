const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem("itens")) || [] // se o localStorage estiver vazio, ele irá criar um array lá dentro. Lembrando que usamos O JSON para transformar esses valores em uma string, então precisamos transformalo novamente em uma array. Por isso usamos o JSON.Parse.

console.log(itens)

itens.forEach( (elemento) => {
    console.log(elemento.nome, elemento.quantidade)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault() 

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criarElemento(nome.value, quantidade.value)


    evento.target.elements['nome'].value = ""
    evento.target.elements['quantidade'].value = ""
})

function criarElemento (nome, quantidade) { 

    const novoItem = document.createElement('li')
    novoItem.classList.add("item") 

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade 
    
    novoItem.appendChild(numeroItem) 
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)
    /*
        Salvando itens no navegador
    */
    const itemAtual = { 
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens)) 
}