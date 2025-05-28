import './App.css'
import { Routes, Route } from 'react-router-dom';
import Init from './pages/init';
import Plot from './pages/plot';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Init/>}></Route>
      <Route path="/plot/:idplot" element={<Plot/>}></Route>
    </Routes>
  )
}

export default App
