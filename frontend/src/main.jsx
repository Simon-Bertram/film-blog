import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ReviewPage from './pages/ReviewPage.jsx'
import ReviewListPage from './pages/ReviewListPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />} >
      <Route index={true} path='/' element={<ReviewListPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/reviews' element={<ReviewListPage />} />
      <Route path='/reviews/:reviewId' element={<ReviewPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>,
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
