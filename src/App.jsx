import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Login from './components/Login'

function App() {

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <Login />
  },
]);





  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
