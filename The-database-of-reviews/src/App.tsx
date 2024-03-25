// import { Routes, Route, HashRouter } from "react-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AppRoute } from './utils'
import { PostContainer } from './PostContainer'
import { PostItem } from './PostItem'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<PostContainer />} />
        <Route path={AppRoute.Post} element={<PostItem />} />
        <Route path="*" element={<h2>Ресурс не найден</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
