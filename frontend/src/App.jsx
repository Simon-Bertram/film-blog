import { Outlet, Link } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import axios from 'axios'

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
