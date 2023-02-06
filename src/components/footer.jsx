import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import '../styles/footer.css'
import Cohere from './pure/cohere.jsx'

export default function Footer() {
  return (
    <footer className='ft-container'>
      <section className='ft-container-text'>
        <div>
          <h2>About Us</h2>
          <ul>
            <li><Link to='/about'>Team</Link> </li>
            <li><a href='https://cohere.ai' target='_blank' rel='noreferrer'>Co:here</a></li>
            <li><a href='https://github.com/midudev/midu-cohere-hackathon' target='_blank' rel='noreferrer'>Hackathon</a></li>
            <li><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noreferrer'>Secret</a></li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li><a href='https://twitter.com/Diegato99' target='_blank' rel='noreferrer'>Twitter</a> </li>
            <li><a href='https://discord.gg/QMr56KHK9z'>Discord</a> </li>
            <li><a href='https://github.com/KingDiegato' target='_blank' rel='noreferrer'>GitHub</a> </li>
          </ul>
        </div>
        <div>
          <h2>More</h2>
          <ul>
            <li><a href='https://github.com/KingDiegato/hotely' target='_blank' rel='noreferrer'>Repository</a> </li>
            <li><a href='https://docs.cohere.ai' target='_blank' rel='noreferrer'>CohereDocs</a> </li>
          </ul>
        </div>
        <div>
          <h2>Powered By:</h2>
          <Cohere />
        </div>
      </section>
      <aside className='ft-container-text-bottom'>
        <Link to='/privacity'> <h5>Privacity Policy</h5> </Link>
        <Link to='/terms'> <h5>Terms & Conditions</h5> </Link>
        <h5>@2023 Hotely</h5>
      </aside>
      <aside className='ft-container-text-bottom'>
        <h6> Hotely© es parte de AirCrew Fundada en 2021, todos los derechos reservados, para mas información haz click
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' rel='noreferrer'> aquí </a>
        </h6>
      </aside>
    </footer>
  )
}
