import './App.css';
import { useEffect, useState } from 'react';
import {Route} from 'react-router-dom'
import BookShelf from '../BookShelf/BookShelf'
function App() {
  let [books, upDateBooks] = useState([])
   useEffect(async () =>{
    let data = await fetch('http://localhost:9000/books')
    let book = await data.json()
    upDateBooks(book.text)
  },[])
  let findBooks = books.map(book =>{
    return <p>{book.author}: {book.title}</p>
  })
  return (
    <section>
         <Route exactpath ='/'
         render ={()=>{
          return <BookShelf  books = {books}/>
         }}></Route>

    </section>
       
  );
}

export default App;
