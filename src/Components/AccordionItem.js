import Accordion from 'react-bootstrap/Accordion';
import { Card } from "react-bootstrap";

function AccordionItemCom() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <Card>
          <Card.Body>
        <Card.Title>Amazing blog post 1</Card.Title>
        <Card.Text>
          Yeee information
        </Card.Text>
      </Card.Body>
      </Card>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        <Card>
          <Card.Body>
        <Card.Title>Amazing blog post 2</Card.Title>
        <Card.Text>
          Yeee information
        </Card.Text>
      </Card.Body>
      </Card>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionItemCom;