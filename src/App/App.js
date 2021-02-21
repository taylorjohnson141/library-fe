import './App.css';
import { useEffect, useState } from 'react';
import {Route,} from 'react-router-dom'
import BookShelf from '../BookShelf/BookShelf'
import NavBar from '../NavBar/NavBar';
import AddBook from '../AddBook/AddBook'
function App() {
  let [books, upDateBooks] = useState([])

  return (
    <section>
        <NavBar/>

          <Route exact path ='/'
          render ={()=>{
            return <BookShelf  books = {books} upDateBooks = {upDateBooks}/>
          }}>
          </Route>

            <Route path ='/addBook'
          render ={()=>{
            return <AddBook books = {books} upDateBooks = {upDateBooks}/>
          }}>

          </Route>
    </section>
       
  );
}

export default App;
