import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import all components
import Username from './components/username';
import Password from './components/password';
import Recovery from './components/recovery';
import Register from './components/register';
import Reset from './components/reset';
import Profile from './components/profile';
import notFound from './components/pageNotFound';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Username></Username>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>,
  },
  {
    path: '/reset',
    element: <Reset></Reset>,
  },
  {
    path: '/password',
    element: <Password></Password>,
  },
  {
    path: '/profile',
    element: <Profile></Profile>,
  },
  {
    path: '*',
    element: <notFound></notFound>,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
