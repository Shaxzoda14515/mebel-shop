import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import HeaderComponent from './components/layout/HeaderComponent'

function App() {
  return (
    <div>
      <HeaderComponent/>
<Routes>
<Route path='/' element={<HomePage/>}/>
</Routes>
    </div>
  )
}

export default App
