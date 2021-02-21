import './App.css';
import { useEffect, useState } from 'react';
import {Route,} from 'react-router-dom'
import BookShelf from '../BookShelf/BookShelf'
import NavBar from './NavBar/NavBar';
function App() {
  let [books, upDateBooks] = useState([])

  return (
    <section>
        <NavBar/>
          <Route exactpath ='/'
          render ={()=>{
            return <BookShelf  books = {books} upDateBooks = {upDateBooks}/>
          }}>
            {/* <Route exactpath ='/'
          render ={()=>{
            return <BookShelf  books = {books} upDateBooks = {upDateBooks}/>
          }}></Route> */}
          </Route>
    </section>
       
  );
}

export default App;
