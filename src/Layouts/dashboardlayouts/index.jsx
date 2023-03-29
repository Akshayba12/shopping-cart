import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Error from '../../components/Errors';
import Header from '../../components/Header';
import { AuthContext } from '../../context/AuthContext';
import CartProvider from '../../context/cartContext';
import { ProductsProvider } from '../../context/productContext';

function DashboardLayout() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <ProductsProvider>
      <CartProvider>
        <Header />
        <Outlet />
        <Error />
      </CartProvider>
    </ProductsProvider>
  );
}

export default DashboardLayout;
