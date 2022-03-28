document.addEventListener("DOMContentLoaded", function () { });
fetch(`http://localhost:3000/books`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)

        const ul = document.getElementById(`list`)
        function listAllBooks() {
            data.forEach(bookInfo => {
                const booksLi = document.createElement(`li`)
                ul.append(booksLi)
                booksLi.innerText = bookInfo.title
                console.log(bookInfo.img_url)
            })

            function showBookDetails(bookInfo) {
                const panel = document.getElementById(`show-panel`)
                ul.addEventListener('click', () => {
                    const thumbnail = document.createElement(`img`)
                    panel.append(thumbnail)
                    thumbnail.src = bookInfo.img_url

                    const description = document.createElement('p')
                    panel.append(description)
                    description.innerHTML = bookInfo.description

                    const usersLikedBook = document.createElement('p')
                    panel.append(usersLikedBook)
                    usersLikedBook.innerHTML = bookInfo.users
                })

            }
            showBookDetails()
        }
        listAllBooks()







    })