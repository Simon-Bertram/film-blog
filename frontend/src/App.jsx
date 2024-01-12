import { Outlet, Link } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <Header />
      <ToastContainer />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
