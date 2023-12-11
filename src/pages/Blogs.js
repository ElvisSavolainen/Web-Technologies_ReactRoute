import React from "react";
import AccordionItemComp from "../Components/AccordionItem.js"; 
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div>
      <div > 
        <Card>
          <Card.Header className="bold-text">Blogs!</Card.Header>
          <Card.Body>
            <Card.Title>Blog Articles</Card.Title>
            <Card.Text>
              Here you can find different blogs, yeeee.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <AccordionItemComp />
    </div>
  );
};

export default Blogs;
