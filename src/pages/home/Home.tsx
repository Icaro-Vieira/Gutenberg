import React, { useEffect, useState } from 'react';
import "../../assets/styles/style.css"
import Search from '../../assets/icons/search';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

function Home() {

  interface DataBook {
    title: string;
    cover_i: number;
    author_name: string;
    number_of_pages_median: number,
    first_publish_year: number;
  }

  const [searchBook, setSearchBook] = useState("")
  const [ books, setBooks ] = useState([])

  function getBooks() {
    axios.get("http://openlibrary.org/search.json?", {params: { title: searchBook }})
      .then((response) => {
        const dataBooks = response.data.docs
        setBooks(dataBooks)
    })
  }

  const navigate = useNavigate()

  function showInformation(book: {}) {
    localStorage.setItem("@dataBook", JSON.stringify(book))
    navigate("/book")
  }

  
  useEffect(() => {
    axios.get("http://openlibrary.org/search.json?", {params: { title: "The lord of Rings" }})
      .then((response) => {
        const dataBooks = response.data.docs
        console.log(dataBooks)
        setBooks(dataBooks)
    })

    if(localStorage.length < 1) {
      localStorage.setItem("@favorites", JSON.stringify([]))
    }
    
  }, [])
 
  return (
    <>
      <main>
        <section className="container-banner">
          <div className="banner">
            <span>“Se conhecimento é poder, a leitura nos deixa invencíveis.”</span>
            <p>- Autor Desconhecido</p>

            <div className='container-input'>
              <input type="text" value={searchBook} placeholder='Lord os Rings...' onChange={(ev) => setSearchBook(ev.target.value)}/>
              <button onClick={() => getBooks()}>
                <Search/>
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className='header-content'> 
            <span>Explorar</span>
          </div>
          <div className='container-content'>
            {
              books.map((data:DataBook, key) => {
                return (
                  <div className='card-book' id={`${key}`} onClick={() => showInformation({
                    title: data.title,
                    cover_i: data.cover_i,
                    author_name: data.author_name,
                    first_publish_yaer: data.first_publish_year,
                    number_of_pages_median: data.number_of_pages_median
                  })}>
                    <div className='container-image'>
                      {data.cover_i === undefined ? <img src="https://i.ibb.co/SQ2Bsbr/AINDA-SEM-POSTER.png" alt="" /> : <img src={`https://covers.openlibrary.org/b/id/${data.cover_i}-L.jpg`} alt=""/>}
                      
                    </div> 
                    <span>{data.title}</span>
                    <p>- { data.author_name }</p>
                  </div>
                )
              })
            }
          </div>
        </section>
      </main>
      
    </>
  );
}

export default Home;
