import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Logement from "./pages/Logement.jsx";
import About from "./pages/About.jsx";
import Error404 from "./pages/Error404.jsx";
import './app.scss'
import Header from './components/Header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
