import { useState } from 'react'
import './App.css'
import { SignUp } from './Components/SignUp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from './Components/Login'
import Dashboard from './Components/Dashboard'
import Customer from './Components/Customer'
import PurchaseOrderForm from './Components/PurchaseOrderForm'
import Shipping from './Components/Shipping'
import Admin from './Components/Admin'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Admin/>}></Route>
          <Route path='/customer' element={<Customer/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/purchase' element={<PurchaseOrderForm/>}></Route>
          <Route path='/shipping' element={<Shipping/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
