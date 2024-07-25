import {Route , Routes} from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Policy from './pages/Policy.js'
import Pagenotfound from './pages/pagenotfound.js'
import Register from './pages/Auth/Register.js'
import Login from './pages/Auth/Login.js'
import DashBoard from './pages/user/DashBoard.js'
import PrivateRoute from './components/Routes/Private.js'
import ForgotPassword from './pages/Auth/ForgotPassword.js'
import AdminRoute from './components/Routes/AdminRoute.js'
import AdminDashboard from './pages/Admin/AdminDashboard.js'
import CreateCategory from './pages/Admin/CreateCategory.js'
import CreateProduct from './pages/Admin/CreateProduct.js'

import Orders from './pages/user/Orders.js'
import Profile from './pages/user/Profile.js'
import Products from './pages/Admin/Products.js'
import UpdateProduct from './pages/Admin/UpdateProduct.js'
import Search from './pages/Search.js'
import ProductDetails from './pages/ProductDetails.js'
import Categories from './pages/Categories.js'
import CategoryProduct from './pages/CategoryProduct.js'
import CartPage from './pages/CartPage.js'
import AdminOrders from './pages/Admin/AdminOrders.js'

function App() {
  return (
    <> 
    <Routes>
      <Route  path='/' element = {<HomePage/>}/>
      <Route  path='/search' element = {<Search/>}/>
      <Route  path='/product/:slug' element = {<ProductDetails/>}/>
      <Route  path='/categories' element = {<Categories/>}/>
      <Route  path='/cart' element = {<CartPage/>}/>
      <Route  path='/category/:slug' element = {<CategoryProduct/>}/>
      <Route  path='/dashboard' element = {<PrivateRoute/>}>
      <Route  path='user' element = {<DashBoard/>}/>
      <Route  path='user/orders' element = {<Orders/>}/>
      <Route  path='user/profile' element = {<Profile/>}/>
      </Route>

      <Route  path='/dashboard' element = {<AdminRoute/>}>
      <Route  path='admin' element = {<AdminDashboard/>}/>
      <Route  path='admin/create-category' element = {<CreateCategory/>}/>
      <Route  path='admin/create-product' element = {<CreateProduct/>}/>
      <Route  path='admin/product/:slug' element = {<UpdateProduct/>}/>
      <Route  path='admin/products' element = {<Products/>}/>
    
      <Route  path='admin/orders' element = {<AdminOrders/>}/>
      </Route>
     
      <Route  path='/register' element = {<Register/>}/>
      <Route  path='/forgot-password' element = {<ForgotPassword/>}/>
      <Route  path='/login' element = {<Login/>}/>
      <Route  path='/about' element = {<About/>}/>
      <Route  path='/policy' element = {<Policy/>}/>
      <Route  path='/contact' element = {<Contact/>}/>
      <Route path='*' element={<Pagenotfound/>} />
    </Routes>
    </>
  );
}

export default App;
