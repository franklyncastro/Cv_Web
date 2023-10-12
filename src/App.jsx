import './App.css'
import About from './Components/About/About'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Components/Home/Home'

function App() {
  const location = useLocation()

  return (
    <div className='app'>
      {location.pathname === '/' ? (<Home/>) : (<></>) }
      
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
    </div>
  )
}

export default App
