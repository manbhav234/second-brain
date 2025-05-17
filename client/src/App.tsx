import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './components/pages/LandingPage'
import Dashboard from "./components/pages/Dashboard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/home" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
