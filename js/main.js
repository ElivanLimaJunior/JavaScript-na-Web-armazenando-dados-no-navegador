const form = document.getElementById('novoItem')

form.addEventListener("submit", (evento) => {
    evento.preventDefault() // Cancela o evento se for cancelável, sem parar a propagação do mesmo. Irá manter o resultado do evento previnindo o comportamento padrão do evento.

    // console.log(evento)
    // console.log(evento.target.elements['nome'].value) pegando pelos elementos do target
    // console.log(evento.target.elements['quantidade'].value) é melhor dessa forma pois podemos futuramente acrescentar + elementos na lista.

    // criarElemento(nome, quantidade) Os parametros para a função criarElementos são os dois target's dos elementos pegados anteriormente
    criarElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value)
})

function criarElemento (nome, quantidade) { 
    console.log(nome) // vamos ver se está funcionando corretamente.
    console.log(quantidade) // veremos se os parametros certos estão sendo passados.
}