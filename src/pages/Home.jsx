import TypingEffect from '../components/TypingEffect'
import { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

export default function Home() {

  useEffect(() => {
    const input = document.getElementById('search')
    const cards = document.querySelectorAll('.project-card')

    const noResults = document.getElementById('no-results')

    input.addEventListener('input', e => {
      const query = e.target.value.toLowerCase()
      let visibleCount = 0
      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase()
        const isVisible = title.includes(query)
        card.style.display = isVisible ? 'block' : 'none'
        if (isVisible) visibleCount++
      })
      if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none'
    })
  }, [])


  return (
    <div>
      <section id="home" className="home">
        <h2><TypingEffect text="Hello World!" speed={200}/></h2>
        <h2>Eu sou <TypingEffect text="Lucas dos Reis Aquino" speed={200}/> </h2>
        <p>Sou um desenvolvedor <strong> Fullstack / DevOps </strong> júnior apaixonado por criar soluções.</p>
        <p>Atualmente trabalho na JBS com .NET, Azure Devops e Observabilidade.</p>
        <p>Tenho diploma técnico em Desenvolvimento de Sistemas pelo Instituo J&F e curso Engenharia de Software pela FIAP.</p>
      </section>

      <section id="projects" className="projects">
        <h2>&gt; Projetos</h2>
        <input id="search" type="text" placeholder="Pesquisar projeto..." className="search-bar" />
        <div className="project-list">
          <p id="no-results" style={{ display: 'none' }}>Projeto não encontrado.</p>
          {projects.map((p, i) => (
            <div key={i} style={{ animationDelay: `${i * 0.2}s` }} className="fade-in-card">
              <ProjectCard id={p.id} title={p.title} description={p.description} tech={p.tech} repo={p.repo} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
