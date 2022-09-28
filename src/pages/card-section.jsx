import { Cards } from "./components/cards";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

export const CardSection=()=>{
    return (<div className="card-section">
    <Container>
      <Row>
        <Col><Cards 
            title= "Success story of KLocal"
            content="Some quick example text to build on the card title and make up the 
          bulk of the card's content."
          img={img1} /></Col>

        <Col><Cards 
            title= "New finding of Science"
            content="Some quick example text to build on the card title and make up the 
          bulk of the card's content."
          img={img2}
        /></Col>

        <Col><Cards
        title= "Mushroom Health benefits"
            content="Some quick example text to build on the card title and make up the 
          bulk of the card's content."
          img={img3} /></Col>
      </Row>
    </Container>
    </div>);
}
