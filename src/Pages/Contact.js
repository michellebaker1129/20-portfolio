import React from "react";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact=() => {
    return (
        <section>
            <h2>
                Contact
            </h2>

            <Container style={{maxWidth: '500px'}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </section>
    )
}
export default Contact