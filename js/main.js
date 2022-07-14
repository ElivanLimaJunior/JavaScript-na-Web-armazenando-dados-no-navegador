const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')// criando uma const chamada lista para que todo o nosso JS trabalher com o ID e também a nossa resposta será visual.

form.addEventListener("submit", (evento) => {
    evento.preventDefault() // Cancela o evento se for cancelável, sem parar a propagação do mesmo. Irá manter o resultado do evento previnindo o comportamento padrão do evento.

    // console.log(evento)
    // console.log(evento.target.elements['nome'].value) pegando pelos elementos do target
    // console.log(evento.target.elements['quantidade'].value) é melhor dessa forma pois podemos futuramente acrescentar + elementos na lista.

    // criarElemento(nome, quantidade) Os parametros para a função criarElementos são os dois target's dos elementos pegados anteriormente.

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criarElemento(nome.value, quantidade.value)

    // Quando a função passar por aqui ele irá alterar o valor de name  e quantidade.
    evento.target.elements['nome'].value = ""
    evento.target.elements['quantidade'].value = ""
})

function criarElemento (nome, quantidade) { 
    //console.log(nome) // vamos ver se está funcionando corretamente.
    //console.log(quantidade) // veremos se os parametros certos estão sendo passados.

    // <li class="item"><strong>7</strong>Camisa</li>
    // para criar um elementos usamos o createElement()
    const novoItem = document.createElement('li')
    novoItem.classList.add("item") // adicionamos a classe item no nosso 'li'

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade // dentro do strong terá a nossa quantidade.
    
    novoItem.appendChild(numeroItem) // adicionando o strong dentro do novoItem.
    novoItem.innerHTML += nome // Adicionando o valor do parametro nome dentro da nossa tag.

    // criando uma const chamada lista para que todo o nosso JS trabalher com o ID e também a nossa resposta será visual.

    lista.appendChild(novoItem) // adicionando o Child "novoItem" na nossa lista e obtendo um resultado visual no HTML.
}