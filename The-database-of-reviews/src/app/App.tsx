// import { Routes, Route, HashRouter } from "react-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AppRoute } from './config/utils'
import { Post } from '../pages/Post/ui/Post'
import { Main } from '../pages/Main/ui/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Post} element={<Post />} />
        <Route path="*" element={<h2>Ресурс не найден</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
