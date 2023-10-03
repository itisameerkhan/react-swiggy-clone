import './EmptyCart.css';
import { CDN_URL } from '../../utils/Constants';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    const imageId = '2xempty_cart_yfxml0';
    return (
        <div className="empty-cart-container">
            <img src={CDN_URL + imageId} alt="" className='empty-cart-img' />
            <h4>Your Cart is Empty</h4>
            <p>You can go to home to view more restaurants</p>
            <button className='empty-cart-btn'>
                <Link to={'/'} className='cart-link'>
                    See Restaurants Near You
                </Link>
            </button>
        </div>
    )
}

export default EmptyCart;