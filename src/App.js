import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from "./components/Layout"
import Home from './components/Home'
import SearchPage from './components/SearchPage'
import Sample from './components/Sample'

function App() {
  return (
    <div>
      <Layout/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Search' element={<SearchPage/>}/>
          <Route path='/sample' element={<Sample/>}/>
      </Routes>
    </div>
  )
}

export default App