import { useLocation, useNavigate, useParams } from 'react-router-dom'
import projects from '../data/projects'

export default function ProjectInfo() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const params = useParams()

  let project = state
  if (!project && params?.id) {
    project = projects.find(p => String(p.id) === String(params.id))
  }

  if (!project) {
    return (
      <section className="fade-in">
        <h2>Projeto não encontrado.</h2>
        <button className="details-btn" onClick={() => navigate('/')}>Voltar</button>
      </section>
    )
  }

  const { title, description, tech, repo } = project

  return (
    <section className="fade-in">
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>Tecnologias:</h4>
      <ul>
        {tech.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
      {repo && (
        <p><a target='_blank' rel='noopener noreferrer' href={repo}>{repo}</a></p>
      )}
      {!repo && (
        <p>Projeto desenvolvido internamente na empresa JBS.</p>
      )}
      <button className="details-btn" onClick={() => navigate('/')}>
        Voltar
      </button>
    </section>
  )
}
