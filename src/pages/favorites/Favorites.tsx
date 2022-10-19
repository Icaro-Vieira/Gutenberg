import React from "react";
import { useNavigate } from "react-router-dom";

export function Favorites() {
    interface Favorites {
        cover_i: number;
        title: string;
        author_name: string;
        number_of_pages_median: number;
        first_publish_year: number;
    }
    
    const navigate = useNavigate()
    const favorites = JSON.parse(localStorage.getItem("@favorites") || "")

    function showInformation(book: {}) {
        localStorage.setItem("@dataBook", JSON.stringify(book))
        navigate("/book")
    }

    return (
        <>
         <header className="sub-header"></header>
            <main>
                <section>
                    <div className="header-content">
                        Favoritos
                    </div>
                    <div className="container-content">
                        {
                            favorites.map((data: Favorites) => {                
                                return (
                                    <div className="card-book" onClick={() => showInformation({
                                        cover_i: data.cover_i,
                                        title: data.title,
                                        author_name: data.author_name,
                                        number_of_pages_median: data.number_of_pages_median,
                                        first_publish_year: data.first_publish_year,
                                    })}>
                                        <div className="container-image">
                                            {data.cover_i === undefined ? <img src="https://i.ibb.co/SQ2Bsbr/AINDA-SEM-POSTER.png" alt="Imagem sem Poster"/> : <img src={`https://covers.openlibrary.org/b/id/${data.cover_i}-L.jpg`} alt="Capa do Livro" />}
                                        </div>
                                        
                                        <span>{data.title}</span>
                                        <p>- {data.author_name}</p>
                                    </div>
                                )
                            })
                        }
                </div>
                </section>
            </main>
        </>
    )
}