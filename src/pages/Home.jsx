import TypingEffect from '../components/TypingEffect'

export default function Home() {
  return (
    <section id="home" className="home">
      <h2><TypingEffect text="Hello World!" speed={200}/></h2>
      <h2>Eu sou <TypingEffect text="Lucas dos Reis Aquino" speed={200}/> </h2>
      <p>Sou um desenvolvedor <strong> Fullstack / DevOps </strong> apaixonado por criar soluções.</p>
      <p>Atualmente trabalho com .NET, Azure Devops e Observabilidade.</p>
    </section>
  )
}
