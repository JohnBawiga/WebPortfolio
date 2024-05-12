import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useEffect } from 'react' // Change to useEffect from useState
import Resume from '../../assets/Bawiga_Resume.pdf'

export function Header() {
  useEffect(() => {
    // Apply the 'light' class to the HTML element when the component mounts
    let html = document.getElementsByTagName('html')[0]
    html.classList.add('light')

    // Clean up function to remove the 'light' class when the component unmounts
    return () => {
      html.classList.remove('light')
    }
  }, []) // Empty dependency array ensures this effect runs only once on mount

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.remove('light') // Remove 'light' class when menu is closed
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<John Melchizedek "}</span>
          <span>{" Bawiga />"}</span>
        </HashLink>
        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>
        <nav>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={Resume} download className="button">
            Resume
          </a>
        </nav>
        <div
          aria-haspopup="true"
          aria-label="Open menu"
          className="menu"
          onClick={toggleTheme}
        ></div>
      </Router>
    </Container>
  )
}
