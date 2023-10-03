import ReactDOM from 'react-dom/client'
import '../src/index.css'
import Header from './Header/Header'
import Body from './Body/Body';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import appStore from './Redux/appStore';
import Footer from './Footer/Footer';

const RestaurantMenu = lazy(() => import('./RestaurantMenu/RestaurantMenu'));
const Cart = lazy(() => import('./Cart/Cart'));

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={appStore} >
      <Router>
         <div className="root">
            <Header />
            <Routes>
            <Route path='/'>
               <Route index element={<Body />}></Route>
               <Route path='/restaurants/:resId' element={<Suspense><RestaurantMenu /></Suspense>} />
               <Route path='/cart' element={<Suspense><Cart /></Suspense>} />
            </Route>
            </Routes>
            <Footer />
         </div>
      </Router>
   </Provider>
)
