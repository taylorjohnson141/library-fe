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
        Read:
        <input type="checkbox" htmlFor = 'hasRead'/>
      </label>
    </form>
  )
}
export default AddBook