import React, { useContext, useEffect, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthContext from './context/auth-context';
import RootLayout from './RootLayout';

import ErrorPage from './pages/errorPage';
import LoginSiswa from './pages/LoginSiswa';
import HomeSiswa from './pages/siswa/HomeSiswa';
import Tugas from './pages/siswa/Tugas';
import History from './pages/siswa/History';
import SubTopic from './pages/siswa/subTopic';
import Dokumentasi from './pages/siswa/Dokumentasi';
import Edit from './pages/siswa/Edit';

const routerLogin = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginSiswa /> },
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
      { path: '/topic/sub', element: <SubTopic /> },
      { path: '/topic/sub/doku', element: <Dokumentasi /> },
      { path: '/topic/sub/doku/edit', element: <Edit /> },
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
      {ctx.isLoggedIn && ctx.role === 'siswa' && (
        <RouterProvider router={routerSiswa} />
      )}
    </>
  );
}

export default App;
