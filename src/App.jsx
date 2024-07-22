import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateStore from './pages/CreateStore'
import EditStore from './pages/EditStore'
import DeleteStore from './pages/DeleteStore'
import ShowStore from './pages/ShowStore'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/stores/create" element={<CreateStore/>}/>
      <Route path="/stores/details/:id" element={<ShowStore/>}/>
      <Route path="/stores/edit/:id" element={<EditStore/>}/>
      <Route path='/stores/delete/:id' element={<DeleteStore/>}/>
    </Routes>
  )
   
}

export default App
