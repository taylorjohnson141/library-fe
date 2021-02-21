import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar(){
  return (
  <section className = 'navBar'>
    <NavLink to = '/' className ='nav'>Books</NavLink>
    <NavLink to = '/addBook' className = 'nav'>Add Books</NavLink>
  </section>
  )
}
export default NavBar