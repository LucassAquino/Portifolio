import { Link } from "react-router-dom";
import { Routes } from "../routes/Routes";

export default function ProjectCard({ id, title, description, tech, repo="" }) {
  const cardState = { id, title, description, tech, repo };
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={Routes.ProjectInfo.replace(':id', id)} state={cardState} className="details-btn">
        Ver Detalhes
      </Link>
    </div>
  )
}
