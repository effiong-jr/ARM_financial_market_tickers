import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
