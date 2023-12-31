import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ReviewPage from './pages/ReviewPage.jsx'
import ReviewListPage from './pages/ReviewListPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />} >
      <Route index={true} path='/' element={<ReviewListPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/reviews' element={<ReviewListPage />} />
      <Route path='/reviews/:reviewId' element={<ReviewPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
