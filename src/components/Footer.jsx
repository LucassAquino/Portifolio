import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact">
      <p>Contate-me: <a href="mailto:lucas@example.com">lucaspo.aquino@gmail.com</a></p>
      <div className="social-icons">
        <a href="https://github.com/seu-usuario" target="_blank" rel="noreferrer">
          {/* <Github size={22} /> */}
        </a>
        <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noreferrer">
          {/* <Linkedin size={22} /> */}
        </a>
      </div>
      <p className="copy">© {new Date().getFullYear()} Lucas Aquino</p>
    </footer>
  )
}
