import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Products from './Components/Products/Products'
import Categories from './Components/Categories/Categories'
import Brands from './Components/Brands/Brands'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Notfound from './Components/Notfound/Notfound'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import ProductPage from './Components/ProductPage/ProductPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UserContextProvider from './Context/userContext'
import CartContextProvider from './Context/cartContext'
import { Toaster } from 'react-hot-toast'
import CheckOut from './Components/CheckOut/CheckOut'
import AllOrders from './Components/AllOrders/AllOrders'
import WishList from './Components/WishList/WishList'
import WishlistContextProvider from './Context/wishlistContext'
import ForgetPass from './Components/ForgetPass/ForgetPass'
import VerfyPass from './Components/VerfyPass/VerfyPass'
import ChangePass from './Components/ChangePass/ChangePass'


let routers = createBrowserRouter([{
  path: '', element: <Layout />, children: [
    { path: '/E-commerce/home', element: <ProtectedRoute><Home /></ProtectedRoute> },
    { path: '/E-commerce/cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
    { path: '/E-commerce/products', element: <ProtectedRoute><Products /></ProtectedRoute> },
    { path: '/E-commerce/productpage', element: <ProtectedRoute><ProductPage /></ProtectedRoute> },
    { path: '/E-commerce/productdetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
    { path: '/E-commerce/categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
    { path: '/E-commerce/brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
    { path: '/E-commerce/checkout', element: <ProtectedRoute><CheckOut /></ProtectedRoute> },
    { path: '/E-commerce/allorders', element: <ProtectedRoute><AllOrders /></ProtectedRoute> },
    { path: '/E-commerce/navbar', element: <ProtectedRoute><Navbar /></ProtectedRoute> },
    { path: '/E-commerce/footer', element: <ProtectedRoute><Footer /></ProtectedRoute> },
    { path: '/E-commerce/wishlist', element: <ProtectedRoute><WishList /></ProtectedRoute> },
    { path: '/E-commerce/', element: <Register /> },
    { path: '/E-commerce/login', element: <Login /> },
    { path: '/E-commerce/forgetpass', element: <ForgetPass /> },
    { path: '/E-commerce/verfypass', element: <VerfyPass /> },
    { path: '/E-commerce/changepass', element: <ChangePass /> },
    { path: '*', element: <Notfound /> }
  ]
}])
let query = new QueryClient()

function App() {

  return <QueryClientProvider client={query}>
    <WishlistContextProvider>
      <CartContextProvider>
        <UserContextProvider>
          <RouterProvider router={routers}></RouterProvider>
          <Toaster />
        </UserContextProvider>
      </CartContextProvider>
    </WishlistContextProvider>
  </QueryClientProvider>
}

export default App
