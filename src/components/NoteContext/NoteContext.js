import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import styles from "./NoteContext.module.css";

const NoteContext = () => {
  return (
    <Container>
      <Row>
        <h1>Note App</h1>
        <Col>
          <Form className={styles.NoteContextContainer}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Note Title</Form.Label>
              <Form.Control type="text" placeholder="Enter a title" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Note</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Col>
        <Col className={styles.NoteContextContainer}>
          <h4>Color</h4>
          <div className={styles.colorBox}>
            <button
              type="button"
              className={styles.NoteContextCheckColorYellow}
            ></button>
            <button
              type="button"
              className={styles.NoteContextCheckColorBlue}
            ></button>
            <button
              type="button"
              className={styles.NoteContextCheckColorGrey}
            ></button>
            <button
              type="button"
              className={styles.NoteContextCheckColorGreen}
            ></button>
          </div>
          <button className={styles.submitButton}>Add Note</button>
        </Col>
      </Row>
    </Container>
  );
};

export default NoteContext;
