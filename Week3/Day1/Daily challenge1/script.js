

// let ul1 = document.createElement("ul");

// Body.appendChild(ul1)

// let book1 = document.createElement("li")

// ul1.appendChild(book1)

// book1.innerText = "Harry Potter 1"

// let book2 = document.createElement("li")

// ul1.appendChild(book2)

// book2.innerText = "Harry Potter 2"


Body = document.getElementsByTagName("body")[0]

let allBooks = document.createElement("array");

Body.appendChild(allBooks);

let Title = document.createElement ("p")

allBooks.appendChild(Title)

allBooks.insertAdjacentElement('beforeend', Title)

Title.innerText ="Harry Potter The Philosopher's Stone"

let Autor = document.createElement("p")

allBooks.appendChild(Autor)

allBooks.insertAdjacentElement('beforeend', Autor)

Autor.innerText ="jk rowling"


let image = document.createElement("img")

allBooks.appendChild(image)

allBooks.insertAdjacentElement('beforeend', image)

image.src = "https://m.media-amazon.com/images/I/91G2aMQuu9L.jpg" ;

image.width = 100;



let Title2 = document.createElement ("p")

allBooks.appendChild(Title2)

allBooks.insertAdjacentElement('beforeend', Title2)

Title2.innerText ="Harry Potter The Chamber of Secrets"


let Autor2 = document.createElement("p")

allBooks.appendChild(Autor2)

allBooks.insertAdjacentElement('beforeend', Autor2)

Autor2.innerText ="written by jk rowling"


let image2 = document.createElement("img")

allBooks.appendChild(image2)

allBooks.insertAdjacentElement('beforeend', image2)

image2.src = "https://kbimages1-a.akamaihd.net/4eab95f0-0a63-44f5-9ce9-1e8d3896c01f/353/569/90/False/harry-potter-and-the-chamber-of-secrets-5.jpg" ;

image2.width = 100;








