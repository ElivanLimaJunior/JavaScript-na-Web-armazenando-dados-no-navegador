const form = document.getElementById('novoItem')

form.addEventListener("submit", (evento) => {
    evento.preventDefault() // Cancela o evento se for cancelável, sem parar a propagação do mesmo. Irá manter o resultado do evento previnindo o comportamento padrão do evento.

    console.log(evento)
    console.log(evento.target.elements['nome'].value) // pegando pelos elementos do target
    console.log(evento.target.elements['quantidade'].value) // é melhor dessa forma pois podemos futuramente acrescentar + elementos na lista.
})