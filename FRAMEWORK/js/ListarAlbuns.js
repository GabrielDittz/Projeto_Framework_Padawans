function criaLinha (dados) {
    linha = document.createElement("tr")
    tdUserId = document.createElement("td")
    tdId = document.createElement("td")
    tdTitle = document.createElement("td")
    tdUserId.innerHTML = dados.userId
    tdId.innerHTML = dados.id
    tdTitle.innerHTML = dados.title

    linha.appendChild(tdUserId)
    linha.appendChild(tdId)
    linha.appendChild(tdTitle)

    return linha;
}

function request () {
  fetch("https://jsonplaceholder.typicode.com/albums")
  .then(function(response){
    return response.json()
  })
  .then((response) => {
    console.log(response)
    response.forEach(element => {
      let linha = criaLinha(element)
      tabela.appendChild(linha)
    })
  })
} 
request()


