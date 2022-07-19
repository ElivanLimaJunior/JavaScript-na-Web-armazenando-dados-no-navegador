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

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual // 3 pegando o elemento correto e atualizando o id correto
    } else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0; // 1 operador ternario, se não tiver nada  no nosso array nós iremos adicionar o valor 0. Agora se tiver ele irá somar 1.
        // 2 nos precisamos encontrar o ultimo elemento do array. Então nós precisamo encontrar o ultimo elemento e somar o array + 1 

        criarElemento(itemAtual)

        itens.push(itemAtual)
    }

    /*
        Salvando itens no navegador
    */
        
    localStorage.setItem("itens", JSON.stringify(itens)) 

    nome.value = ""
    quantidade.value = ""
})

// Criando elemento

function criarElemento (item) { 

    const novoItem = document.createElement('li')
    novoItem.classList.add("item") 

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem) 

    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)    
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}


// Criando botão X para remover um item
// Quando criamos um botão ele não recebo o addEventListener
function botaoDeleta (id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerHTML = "X"

    elementoBotao.addEventListener("click", function() { // this não funciona junto com uma arrow function
        deletaElemento(this.parentNode, id) // para referir ao botão que eu cliquei
    })

    return elementoBotao
}

function deletaElemento(tag, id) {

    tag.remove() // remover a tag

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1) // procuramos com o findIndex() e dentro dele passamos "elemento" e vamos buscar "=>" "elemento.id == id"
 
    localStorage.setItem("itens", JSON.stringify(itens)) // passando para o local storage remover o item clicado.
}