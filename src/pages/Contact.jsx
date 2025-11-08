import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert(`Nome: ${formData.name}\nEmail: ${formData.email}\nMensagem: ${formData.message}`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="fade-in">
      <h2>&gt; Contato</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Mensagem</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Enviar</button>
        </form>
    </section>
  )
}
