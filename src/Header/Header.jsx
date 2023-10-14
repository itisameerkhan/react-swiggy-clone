import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainLogo from '../assets/MainLogo.svg';

const Header = () => {
  
  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className='header'>
          <div className="header-left">
          <Link to={'/'}>
          <img src={MainLogo} alt="logo" className='swiggy-logo' />
          </Link>
          <p id='header-location'>Chennai, TamilNadu, India
          <i className="fa-solid fa-chevron-down"></i></p>
          </div>
          <div className="header-right">
            <p>
            <i className="fa-solid fa-magnifying-glass"></i>
            Search
            </p>
            <p id="header-right-offers">
            <i className="fa-solid fa-percent"></i>
            Offers
            </p>
            <p id="header-right-help">
            <i className="fa-solid fa-circle-info"></i>
            Help
            </p>
            <p id="header-right-user">
            <i className="fa-solid fa-user"></i>
            Sign in
            </p>
            <NavLink to={'/cart'} className={'cart-link'}>
            <p id="header-right-cart">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart ({cartItems.length})
            </p>
            </NavLink>
          </div>
        </div>
    )
}

export default Header;