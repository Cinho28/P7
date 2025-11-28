import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Logement from "./pages/Logement.jsx";
import About from "./pages/About.jsx";
import Error404 from "./pages/Error404.jsx";
import './app.scss'
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
    <div className='dimension'>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
