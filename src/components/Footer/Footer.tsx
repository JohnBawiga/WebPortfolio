import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
// import discordIcon from '../../assets/discord.png'
import facebook from '../../assets/facebook.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://vinayaksingh.in" className="logo">
        <span>www.john</span>
        <span>bawiga.com</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/john-melchizedek-bawiga-7929b52bb/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/JohnBawiga/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        
        <a
          href="https://www.facebook.com/bojjicutie"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/jm.bawiga/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
