import { Link } from "react-router-dom";

const Header = () => {
  return ( 
    <header>
      <div>{/* background image container*/} 
        <nav>
          <Link to={'/'}>
            <div>
              <h1>FilmZilla</h1>
            </div>
          </Link>
          
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'reviews'}>Reviews</Link></li>
            <li><Link to={'about'}>About</Link></li>
          </ul>
        </nav>
      </div>{/* end background image container*/}
    </header>
   );
}
 
export default Header;