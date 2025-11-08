import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { Routes } from '../routes/Routes'
import projects from '../data/projects'

export default function Projects() {
//   const navigate = useNavigate()

  useEffect(() => {
    const input = document.getElementById('search')
    const cards = document.querySelectorAll('.project-card')

    input.addEventListener('input', e => {
      const query = e.target.value.toLowerCase()
      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase()
        card.style.display = title.includes(query) ? 'block' : 'none'
      })
    })
  }, [])


  return (
    <section id="projects" className="projects fade-in">
      <h2>&gt; Projetos</h2>
      <input id="search" type="text" placeholder="Pesquisar projeto..." className="search-bar" />
      <div className="project-list">
        {projects.map((p, i) => (
          <div key={i} style={{ animationDelay: `${i * 0.2}s` }} className="fade-in-card">
            <ProjectCard
              id={p.id}
              title={p.title}
              description={p.description}
              tech={p.tech}
            //   onDetailsClick={() => navigate(`${Routes.ProjectInfo.replace(':id', p.id)}`, { state: p })}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
