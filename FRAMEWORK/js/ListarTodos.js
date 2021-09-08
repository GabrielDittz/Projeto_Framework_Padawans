function criaLinha (dados) {
  linha = document.createElement("tr")
  tdUserId = document.createElement("td")
  tdId = document.createElement("td")
  tdTitle = document.createElement("td")
  tdcompleted = document.createElement("td")
  tdUserId.innerHTML = dados.userId
  tdId.innerHTML = dados.id
  tdTitle.innerHTML = dados.title
  tdcompleted.innerHTML = dados.completed

  linha.appendChild(tdUserId)
  linha.appendChild(tdId)
  linha.appendChild(tdTitle)
  linha.appendChild(tdcompleted)

  return linha;
}

function request () {
fetch("https://jsonplaceholder.typicode.com/todos")
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


