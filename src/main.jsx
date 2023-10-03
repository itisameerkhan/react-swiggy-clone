import ReactDOM from 'react-dom/client'
import '../src/index.css'
import Header from './Header/Header'
import Body from './Body/Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantMenu from './RestaurantMenu/RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './Redux/appStore';
import Cart from './Cart/Cart';
import Footer from './Footer/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={appStore} >
      <Router>
         <div className="root">
            <Header />
            <Routes>
            <Route path='/'>
               <Route index element={<Body />}></Route>
               <Route path='/restaurants/:resId' element={<RestaurantMenu />} />
               <Route path='/cart' element={<Cart />} />
            </Route>
            </Routes>
            <Footer />
         </div>
      </Router>
   </Provider>
)
