import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar(){
  return (
  <section className = 'navBar'>
    <NavLink to = '/' className ='link'>Books</NavLink>
    <NavLink to = '/addBook' className = 'link'>Add Books</NavLink>
    <NavLink to = '/currentyReading' className = 'link'>Currenty Reading</NavLink>
    <NavLink to = '/wishlist' className ='link'>Wishlist</NavLink>
  </section>
  )
}
export default NavBar