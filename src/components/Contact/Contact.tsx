import { Container } from "./styles";
import emailIcon from "../../assets/mail.png";
import phoneIcon from "../../assets/phone.png"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>

      </header>
      <div className="contacts">
        <div>
        <a href="mailto:jmjay800@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:jmjay800@gmail.com">jmjay800@gmail.com</a>
        </div>
        <div>
        <a href="tel:+639456675585"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+639456675585">(+63) 9456675585</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}