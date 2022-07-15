const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem("itens")) || [] // se o localStorage estiver vazio, ele irá criar um array lá dentro. Lembrando que usamos O JSON para transformar esses valores em uma string, então precisamos transformalo novamente em uma array. Por isso usamos o JSON.Parse.

itens.forEach( (elemento) => {
    criarElemento(elemento)
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault() 

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    /*
        Salvando itens no navegador
    */
    const itemAtual = { 
        "nome": nome.value,
        "quantidade": quantidade.value
    }
    
    criarElemento(itemAtual)

    itens.push(itemAtual)
    
    localStorage.setItem("itens", JSON.stringify(itens)) 

    evento.target.elements['nome'].value = ""
    evento.target.elements['quantidade'].value = ""
})

function criarElemento (item) { 

    const novoItem = document.createElement('li')
    novoItem.classList.add("item") 

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade 
    novoItem.appendChild(numeroItem) 

    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)
}