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
    }else if(event.target.id === 'hasRead'){
      let val = false
      if(event.target.value === 'false'){
        val = true
      } 
      addBook({...book, [event.target.id]: val})

    }else{
      addBook({...book, [event.target.id]: event.target.value})
    }
  }
  let onSubmit = (event) =>{
      fetch('http://localhost:9000/AddPost',{
        method: 'Post',
        body:JSON.stringify(book)
      })
    

   
  }
  return(
    <form >
      <label>
        Title:
        <input type="text" htmlFor = 'title' id ='title'  value = {book.title} onChange = {onChange} required />
      </label>
      <label>
        Author:
        <input type="text" htmlFor = 'author' id ='author'  value = {book.author} onChange = {onChange} required/>
      </label>
      <label>
        Cover:
        <input type="file" htmlFor = 'coverPhoto' id ='coverPhote'  ref ={coverPhoto} onChange = {onChange} required/>
      </label>
      <label>
        Check if you have Read this book:
        <input type="checkbox" htmlFor = 'hasRead' id ='hasRead'  value = {book.hasRead} onChange = {onChange} required/>
      </label>
      <button onClick = {onSubmit}>Submit</button>
    </form>
  )
}
export default AddBook