<<<<<<< HEAD
// App
import {Route, Routes} from 'react-router-dom'
import './styles/layout/app.scss'

import Header from './components/Header/Header.jsx'
import TopNav from './components/TopNav/TopNav.jsx'
import BtmNav from './components/BtmNav/BtmNav.jsx'
import Footer from './components/Footer/Footer.jsx'

// Pages
import Home from './pages/Home/Home.jsx'
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
>>>>>>> 8227bbdcd657fb42dd01bb1e93e12a1e635221d8

import Navbar from "./components/Navbar/Navbar.jsx"
import Header from "./components/Header/Header.jsx"
function App() {
  return (
    // Template structure
    <>
<<<<<<< HEAD
      <div className="app">
        <div className="app__wrap">

          {/* Header */}
          <header className="app__header">
            <Header />
            <TopNav />
          </header>

          <main className='app__main'>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="app__footer">
            <Footer />
            <BtmNav />
          </footer>

        </div>
      </div>
=======
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
>>>>>>> 8227bbdcd657fb42dd01bb1e93e12a1e635221d8
    </>
  )
}

export default App;
