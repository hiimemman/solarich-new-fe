import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

export default function App() : JSX.Element{


  return (
    <>
    <Router>
      <Routes>

        <Route path ="/" element = {<Home />} />

      </Routes>
    </Router>
    </>
  )
}


