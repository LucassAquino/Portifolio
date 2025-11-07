import { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    { title: 'Pipeline Automático Azure', description: 'Template YAML para build e deploy simultâneo em múltiplos servidores.' },
    { title: 'Sistema de Pedidos com Web Workers', description: 'Gerenciamento de tarefas paralelas com dependências entre processos.' },
    { title: 'Ferramenta de Comparação de DataTables', description: 'Detecção e log de diferenças entre DataSets .NET.' },
    { title: 'App Flutter de Anotações', description: 'Aplicativo com Hive e Provider, suporte a imagens e Google Auth.' },
    { title: 'Ferramenta Roslyn CodeFix', description: 'Analisador de código para diretivas pragma em C#.' }
  ]

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
    <section id="projects" className="projects">
      <h2>&gt; Projetos</h2>
      <input id="search" type="text" placeholder="Pesquisar projeto..." className="search-bar" />
      <div className="project-list">
        {projects.map((p, i) => (
          <div key={i} style={{ animationDelay: `${i * 0.2}s` }} className="fade-in-card">
            <ProjectCard title={p.title} description={p.description} />
          </div>
        ))}
      </div>
    </section>
  )
}
