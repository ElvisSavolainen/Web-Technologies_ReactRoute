import React from "react";
import EmailForm from "../Components/EmailForm.js"; 
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
   <Card>
      <Card.Header>Welcome!</Card.Header>
      <Card.Body>
        <Card.Title>Home page</Card.Title>
        <Card.Text>
          This is the home section of the website, you can check everything else from top menus.
        </Card.Text>
      </Card.Body>
    </Card>
    <EmailForm />
  </div>
);
};

export default Home;
