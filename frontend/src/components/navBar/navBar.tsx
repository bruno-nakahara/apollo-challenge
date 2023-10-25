import { Link } from 'react-router-dom';
import './style.css';

interface IProps {}

const NavBar: React.FC<IProps> = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={'/'}>Apollo</Link>
      </h2>

      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>

        <li>
          <Link to={'/product'} className="link-btn">
            New Product
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
