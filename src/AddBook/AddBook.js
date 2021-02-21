import {useState, createRef} from 'react'

function AddBook (){
  let coverPhoto = createRef()
  let [book,addBook] = useState({
    title:'',
    author:'',
    coverPhoto:'',
    hasRead:false,
  })
  let onChange = (event) =>{

    if(coverPhoto.current.files.length !== 0){
      addBook({...book,coverPhoto:coverPhoto.current.files[0].name})
    }else{
      addBook({...book, [event.target.id]: event.target.value})
    }
   console.log(book)

  }
  return(
    <form >
      <label>
        Title:
        <input type="text" htmlFor = 'title' id ='title'  value = {book.title} onChange = {onChange} />
      </label>
      <label>
        Author:
        <input type="text" htmlFor = 'author' id ='author'  value = {book.author} onChange = {onChange}/>
      </label>
      <label>
        Cover:
        <input type="file" htmlFor = 'coverPhoto' id ='coverPhote'  ref ={coverPhoto} onChange = {onChange}/>
      </label>
      <label>
        Check if you have Read this book:
        <input type="checkbox" htmlFor = 'hasRead' id ='hasRead'  value = {book.hasRead} onChange = {onChange}/>
      </label>
      <button >Submit</button>
    </form>
  )
}
export default AddBook