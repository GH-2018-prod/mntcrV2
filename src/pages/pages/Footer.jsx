import { Facebook, Instagram } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export const Footer = () => {
  return (
    <div className="text-center text-lg-start text-white mt-4" >
    <hr/>
    <Container>
      <Row>
        <section className="text-center mt-1">
          <a
            className="btn btn-lg text-white m-1"
            style={{ backgroundColor: '#3b5998'}}
            href="https://www.facebook.com"
            role="button"
          ><Facebook /></a>
          <a
            className="btn btn-lg text-white m-1 instagram"
            href="https://www.instagram.com"
            role="button"
          ><Instagram /></a>
        </section>
      </Row>
      <div className="text-center p-3 text-black">
        <p>
          San Jose, Costa Rica
        </p>
        <p>
          © 2023 Copyright My Native Teacher
        </p>
      </div>
    </Container>
  </div>
  )
}
