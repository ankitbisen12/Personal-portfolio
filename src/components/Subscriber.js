import React, { useState } from "react";
import { Col, Row, Form,Button } from "react-bootstrap";
import './Subscriber.css';

const Subscriber = () => {
  const [email, setEmail] = useState("");

  const inputChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const addSubcriberHandler  =async (subscriber)=>{
    const response  = await fetch("https://newsletter-subscribe-d06b2-default-rtdb.firebaseio.com/subscriber.json",
    {
      method: "POST",
      body: JSON.stringify(subscriber),
      headers: {
        "Content-Type": "application/json",
      },
    }
    )  
  
    const data = await response.json();
    console.log(data);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    addSubcriberHandler(email);
    setEmail("");
  };
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our  & Never miss latest updates
            </h3>
          </Col>
          <Col md={6} xl={7} sm={12}>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                 <input value={email} type="email" onChange={inputChangeHandler} placeholder="Email Address" />
              </Form.Group>
              <Button type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Subscriber;
