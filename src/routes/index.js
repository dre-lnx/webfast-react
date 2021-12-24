import { React } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrimarySearchAppBar from '../components/navBar'

import Home from '../pages/home'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
