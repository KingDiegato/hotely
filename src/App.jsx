
import { Route, Routes } from 'react-router'
import About from './pages/about'
import Home from './pages/home'
import Start from './pages/start'
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
    </Routes>
  )
}

export default App
