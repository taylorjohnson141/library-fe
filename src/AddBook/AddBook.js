function AddBook (){
  return(
    <form >
      <label>
        Title:
        <input type="text" htmlFor = 'title'/>
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