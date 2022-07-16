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

    // Checando para ver se existe o valor 
    const existe = itens.find( elemento => elemento.nome === nome.value)
    
    const itemAtual = { 
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    // console.log(existe)
    if (existe) {
         itemAtual.id = existe.id
         
        atualizaElemento(itemAtual)
    } else {
        itemAtual.id = itens.length

        criarElemento(itemAtual)

        itens.push(itemAtual)
    }

    /*
        Salvando itens no navegador
    */
        
    localStorage.setItem("itens", JSON.stringify(itens)) 

    name.value = ""
    quantidade.value = ""
})

function criarElemento (item) { 

    const novoItem = document.createElement('li')
    novoItem.classList.add("item") 

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem) 

    novoItem.innerHTML += item.nome

    lista.appendChild(novoItem)    
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}