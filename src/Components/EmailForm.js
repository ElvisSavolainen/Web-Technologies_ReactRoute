import React, { useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";

const EmailForm = () => {
  // State for email input and success alert
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary validation or API calls here
    // For simplicity, let's just show a success message
    setShowSuccess(true);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Email Form</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {/* Show success alert if showSuccess is true */}
        {showSuccess && (
          <Alert variant="success" className="mt-3">
            Email submitted successfully!
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default EmailForm;
