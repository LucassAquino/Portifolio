import { useState } from 'react'
import { Routes } from '../routes/Routes'
import { Link } from "react-router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="header">
      <Link to={Routes.Root}><h1 className="logo">&lt;Lucas_Aquino /&gt;</h1></Link>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? 'active' : ''} onClick={() => setMenuOpen(false)}>
        <Link to={Routes.Root}><a>curriculo</a></Link>
        <Link to={Routes.Contact}><a>contato</a></Link>
      </nav>
    </header>
  )
}
