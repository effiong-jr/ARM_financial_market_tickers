import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import DetailsPage from './pages/details/DetailsPage'

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/market-news/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
