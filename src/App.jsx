import { Routes, Route } from 'react-router-dom'
import Busca from './pages/Busca'
import Resultado from './pages/Resultado'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Busca />} />
      <Route path="/resultado" element={<Resultado />} />
    </Routes>
  )
}

export default App
