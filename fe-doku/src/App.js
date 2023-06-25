import React, { useContext, useEffect, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthContext from './context/auth-context';
import RootLayout from './RootLayout';

import ErrorPage from './pages/errorPage';
import LoginSiswa from './pages/LoginSiswa';
import LoginAdmin from './pages/LoginAdmin';
import LoginGuru from './pages/LoginGuru';
import Home from './pages/admin/Home';
import HomeSiswa from './pages/siswa/HomeSiswa';
import Tugas from './pages/siswa/Tugas';
import History from './pages/siswa/History';
import SubTopic from './pages/siswa/subTopic';
import Dokumentasi from './pages/siswa/Dokumentasi';

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
const routerSiswa = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomeSiswa /> },
      { path: '/history', element: <History /> },
      { path: '/tugas', element: <Tugas /> },
      { path: '/topic/subtopic', element: <SubTopic /> },
      { path: '/subtopic/dokumentasi', element: <Dokumentasi /> },
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
  // useEffect(() => {
  //   console.log(ctx.isLoggedIn)
  // }, [ctx])
  return (
    <>
      {!ctx.isLoggedIn && (<RouterProvider router={routerLogin} />)}
      {ctx.isLoggedIn && ctx.role === 'admin' && (
        <RouterProvider router={routerAdmin} />
      )}
      {ctx.isLoggedIn && ctx.role === 'siswa' && (
        <RouterProvider router={routerSiswa} />
      )}
    </>
  );
}

export default App;
