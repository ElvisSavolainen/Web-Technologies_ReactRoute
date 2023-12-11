import React from "react";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Contact = () => {
  
  return (
      <div>
    <Card className="HeadeLiner">
      <Card.Header className="bold-text">Contacts!</Card.Header>
      <Card.Body>
        <Card.Title>Here you can find my contacts.</Card.Title>
        <Card.Text>
          Proceed with Caution!
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="Inquiry">
      <Card.Header>General Inquiry</Card.Header>
      <Card.Body>
        <Card.Title>The email for general inquirys</Card.Title>
        <Button variant="info"onClick={()=>{ alert('You can copy the text: Inquirys@coolDragon.com'); }}>Inquirys@coolDragon.com</Button>{' '}
      </Card.Body>
    </Card>

    <Card className="Feedback">
      <Card.Header>Feedback!</Card.Header>
      <Card.Body>
        <Card.Title>You have feedback? We love feedback!</Card.Title>
        <Button variant="warning" onClick={()=>{ alert('You can copy the text: Feedback@coolDragon.com'); }}>Feedback@coolDragon.com</Button>{' '}
      </Card.Body>
    </Card>

    <Card className="Support">
      <Card.Header>Support!</Card.Header>
      <Card.Body>
        <Card.Title>Only for support messages</Card.Title>
        <Button variant="success"onClick={()=>{ alert('You can copy the text: Support@coolDragon.com'); }}>Support@coolDragon.com</Button>{' '}
      </Card.Body>
    </Card>
  
      </div>)
  };
  
  export default Contact;
  