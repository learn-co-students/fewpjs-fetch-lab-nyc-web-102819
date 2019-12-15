function fetchBooks() {

  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(json => {
    renderBooks(json); 
    
    console.log(json[4])
    console.log(json[4].name)
    console.log(json[4].characters[1030])
    console.log(json[4].numberOfPages)

    let allPages = 0

    let allBooks = json.forEach (function count(e) {
      allPages += e.numberOfPages 
      console.log (e.numberOfPages)
    })
    console.log(allPages)

    // tried with reduce but cannot log total 
    // let allBooks = json.reduce((acc, each) => {acc += each.numberOfPages; console.log(each.numberOfPages)})
    // console.log(allBooks)
  })

}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
