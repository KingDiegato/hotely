
import { Route, Routes } from 'react-router'
import About from './pages/about'
import Home from './pages/home'
import Privacity from './pages/privacity'
import Start from './pages/start'
import Terms from './pages/terms'
import BudgetHotel from './pages/tools/budgetHotel'
import RankHotel from './pages/tools/rankHotel'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/start' element={<Start />} />
      <Route path='/ranking' element={<RankHotel />} />
      <Route path='/budget' element={<BudgetHotel />} />
      <Route path='/about' element={<About />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/privacity' element={<Privacity />} />
      <Route path='*' element={<h1> error 404 </h1>} />
    </Routes>
  )
}

export default App
