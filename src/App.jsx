import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import Landing from './pages/landing'
import About from './pages/about'
import Menu from './pages/menu'

import './App.css'

function App() {
  return (
    <BrowserRouter>
    <nav className='flex gap-[10px] font-bold justify-center bg-black text-white p-[10px]'>
      <Link to='/' >Home</Link>
      <Link to='/about' >About</Link>
      <Link to='/menu' >Menu</Link>
    </nav>
    <div className='App'
    
>
      
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/menu' element={<Menu/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  
  )
}

export default App
