import { useEffect, useState } from 'react';

function BookShelf(props) {
  useEffect(async () =>{
    let data = await fetch('http://localhost:9000/books')
    let book = await data.json()
    props.upDateBooks(book.text)
  },[])

  let findBooks = props.books.map(book =>{
    console.log(book)
      return <p > <img src ={book.cover} alt = 'Book Cover'  /> {book.author}: {book.title}</p>
    
  })
  return (
    <section>
      {findBooks}
    </section>
  )
}
export default BookShelf