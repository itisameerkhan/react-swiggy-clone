import './Cart.css';
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart/EmptyCart';
import { clearCart } from '../Redux/cartSlice';
import { useDispatch } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    let total = 0;
    cartItems.map((item) => total = item.card.info.price / 100 + total);

    const dispatch = useDispatch();

    const HandleClearEvent = () => {
        dispatch(clearCart())
    }

    return cartItems.length === 0 ? <EmptyCart /> : (
       <div className="carts-container">
           <div className="carts-container-inner">
               <div className="address-container">
                  <div className="ctns">
                    <h3>Address</h3>
                    <p style={{color:'gray'}}>Chennai, Tamil Nadu, India</p>
                  </div>
                  <button className="add-new">ADD NEW</button>
               </div>
               <div className="carts-items">
                {cartItems.map((item) => (
                    <div className="cart-item">
                        <p>{item?.card?.info?.name}</p>
                        <p>₹ {(item?.card?.info?.price/100).toFixed(2)}</p>
                    </div>
                ))}
                <div className="tot-items">
                    <h3>Total</h3>
                    <h3>₹  {total}</h3>
                </div>
                <button className="clr-cart" onClick={HandleClearEvent}>Clear Cart</button>
               </div>
           </div>
       </div>
    )
}

export default Cart;
