// App
import {Route, Routes} from 'react-router-dom'
import './styles/layout/app.scss'

import Header from './components/Header/Header.jsx'
import TopNav from './components/TopNav/TopNav.jsx'
import BtmNav from './components/BtmNav/BtmNav.jsx'
import Footer from './components/Footer/Footer.jsx'

// Pages
import Home from './pages/Home/Home.jsx'

function App() {
  return (
    // Template structure
    <>
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
    </>
  )
}

export default App;
