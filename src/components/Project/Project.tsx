import { Container } from "./styles";
import githubIcon from "../../assets/git.png"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/gdrive.png"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/JohnBawiga/welltalkcaps" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://drive.google.com/file/d/1tiWZ6xODYPjOEOBKaba7wjvOe1SkiR-K/view?usp=drive_link" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
            <h3>WellTalk: A Mental Health Application</h3>
              <p>
              A mobile app for CIT-U students to easily book appointments with guidance counselors and maintain personal journals for self-reflection and mental well-being.
              </p>
            </div>
            <footer> <ul className="tech-list">  <li>React Native</li>
                <li>MySQL</li>
                <li>Javascript</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://drive.google.com/file/d/1NFw39hVHPQ_EuAuIukfx5tGFCOYsAJj2/view" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /> </a>
               
              </div>
            </header>
            <div className="body">
              <h3>NetMommy: Protecting Users from Sensitive Content with Search Tracking</h3>
              <p>
              Blocking of sensitive and sexual contents; the user's search engines will be tracked by the application
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Figma</li>
                <li>Canva</li>
                <li>Business Pitch</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

     
      </div>
    </Container>
  );
}