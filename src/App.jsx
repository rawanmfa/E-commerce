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
    { path: 'home', element: <ProtectedRoute><Home /></ProtectedRoute> },
    { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
    { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
    { path: 'productpage', element: <ProtectedRoute><ProductPage /></ProtectedRoute> },
    { path: 'productdetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
    { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
    { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
    { path: 'checkout', element: <ProtectedRoute><CheckOut /></ProtectedRoute> },
    { path: 'allorders', element: <ProtectedRoute><AllOrders /></ProtectedRoute> },
    { path: 'navbar', element: <ProtectedRoute><Navbar /></ProtectedRoute> },
    { path: 'footer', element: <ProtectedRoute><Footer /></ProtectedRoute> },
    { path: 'wishlist', element: <ProtectedRoute><WishList /></ProtectedRoute> },
    { index: true, element: <Register /> },
    { path: 'login', element: <Login /> },
    { path: 'forgetpass', element: <ForgetPass /> },
    { path: 'verfypass', element: <VerfyPass /> },
    { path: 'changepass', element: <ChangePass /> },
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
