import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="header">
      <h1 className="logo">&lt;Lucas_Aquino /&gt;</h1>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? 'active' : ''} onClick={() => setMenuOpen(false)}>
        <a href="#home">home</a>
        <a href="#projects">projetos</a>
        <a href="#contact">contato</a>
      </nav>
    </header>
  )
}
