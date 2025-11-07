import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app">
      <div className="fade-in">
        <Header />
      </div>

      <main>
        <div className="fade-in-delayed">
          <Home />
        </div>

        <div className="fade-in-delayed">
          <Projects />
        </div>
      </main>

      <div className="fade-in-delayed">
        <Footer />
      </div>
    </div>
  )
}
  