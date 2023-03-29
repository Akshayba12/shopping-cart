import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import CartProvider from './context/cartContext';
import { ProductsProvider } from './context/productContext';
import Auth from './Layouts/Auth';
import DashboardLayout from './Layouts/dashboardlayouts';
import About from './pages/About';
import Home from './pages/Homepage';
import Login from './pages/Loginpage';
import Register from './pages/Registerpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
    children:
[
  {
    index: true,
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
],
  },

]);

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </CartProvider>

  );
}

export default App;
