import React, { useState } from "react";
import "./book-information.css"

export function Book() {
    const dataBook = JSON.parse(localStorage.getItem("@dataBook") || "")
    const favorites = JSON.parse(localStorage.getItem("@favorites") || "")
    const [ bookList, setBookList ] = useState(favorites)
    
    function addFavorites(book: {}) {
        setBookList(bookList.push(book))
        localStorage.setItem("@favorites", JSON.stringify(bookList))
    }
    return (
        <>
            <header className="sub-header"></header>
            <main>
                <section>
                    <div className="container-information">
                        <div className="card">
                            <div className="img">
                                {dataBook.cover_i == undefined ? <img src="https://i.ibb.co/SQ2Bsbr/AINDA-SEM-POSTER.png" alt="" /> : <img src={`https://covers.openlibrary.org/b/id/${dataBook.cover_i}-L.jpg`} alt=""/>}
                            </div>
                            <div className="information">
                                <span><strong>Título:</strong> { dataBook.title }</span>
                                <span><strong>Autor:</strong> { dataBook.author_name }</span>
                                <span><strong>Paginas:</strong> { dataBook.number_of_pages_median }</span>
                                <span><strong>Publicado em:</strong> { dataBook.first_publish_yaer } </span>

                                <button onClick={() => addFavorites({
                                    title: dataBook.title,
                                    cover_i: dataBook.cover_i,
                                    author_name: dataBook.author_name,
                                    first_publish_yaer: dataBook.first_publish_yaer,
                                    number_of_pages_median: dataBook.number_of_pages_median
                                })}>Favoritar</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}