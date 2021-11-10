import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'

function App() {
  return (
    <div>
      <Header />
      <h1>ARM</h1>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
