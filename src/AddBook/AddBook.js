import {useState} from 'react'

function AddBook (){
  let [book,addBook] = useState({})
  let onChange = (event) =>{
    addBook({[event.target.id]:[event.target.value]})

  }
  return(
    <form >
      <label>
        Title:
        <input type="text" htmlFor = 'title' id ='title'  value = {book.title} onChange = {onChange} />
      </label>
      <label>
        Author:
        <input type="text" htmlFor = 'author'/>
      </label>
      <label>
        Cover:
        <input type="file" htmlFor = 'coverPhoto'/>
      </label>
      <label>
        Check if you have Read this book:
        <input type="checkbox" htmlFor = 'hasRead'/>
      </label>
      <button >Submit</button>
    </form>
  )
}
export default AddBook