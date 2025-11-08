import {FaGithub, FaLinkedin} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact">
      <p>Contate-me: <a href="mailto:lucaspo.aquino@gmail.com">lucaspo.aquino@gmail.com</a></p>
      <div className="social-icons">
       <a href="https://github.com/LucassAquino" target="_blank" rel="noreferrer">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/lucas-aquino-a405a8214/" target="_blank" rel="noreferrer">
          <FaLinkedin size={28} />
        </a>
      </div>
      <p className="copy">© {new Date().getFullYear()} Lucas Aquino</p>
    </footer>
  )
}
