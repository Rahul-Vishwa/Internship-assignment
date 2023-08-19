import {Routes, Route } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<FirstPage />} />
      <Route path='/secondPage' element={<SecondPage />} />
    </Routes>
  )
}

export default App
