import React, { useContext, useEffect, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthContext from './context/auth-context';
import RootLayout from './RootLayout';

import ErrorPage from './pages/errorPage';
import LoginSiswa from './pages/LoginSiswa';
import LoginAdmin from './pages/LoginAdmin';
import LoginGuru from './pages/LoginGuru';
import Home from './pages/admin/Home';

const routerLogin = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginSiswa /> },
      { path: '/admin', element: <LoginAdmin /> },
      { index: '/guru', element: <LoginGuru /> },
    ]
  }
])
const routerAdmin = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
    ]
  }
])

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      {!ctx.isLoggedIn && (<RouterProvider router={routerLogin} />)}
      {ctx.isLoggedIn && ctx.role === 'admin' && (
        <RouterProvider router={routerAdmin} />
      )}
    </>
  );
}

export default App;
