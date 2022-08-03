import { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import styles from "./NoteContent.module.css";
import check from "../../assets/check.svg";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

const NoteContent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("bgLight");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length < 3 || content.length < 3) {
      alert("Inputs Must be at Least 3 Characters");
      return;
    }

    dispatch(addNote({ id: nanoid(), title, content, color }));

    setTitle("");
    setContent("");
    setColor("bgLight");
  };
  return (
    <Container>
      <Row>
        <h1>Welcome to The Note App 👋 </h1>
        <Col sm={1}></Col>
        <Col>
          <Form className={styles.NoteContentContainer} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Note Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Note</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            <button className={styles.submitButton}>Add Note</button>
          </Form>
        </Col>
        <Col className={styles.NoteContentContainer}>
          <h4>Choose a Color</h4>
          <div className={styles.colorBox}>
            <button
              type="button"
              className={styles.NoteContentCheckColorYellow}
              onClick={(e) => setColor("bgYellow")}
            >
              {color === "bgYellow" && <img src={check} alt="" />}
            </button>
            <button
              type="button"
              className={styles.NoteContentCheckColorBlue}
              onClick={(e) => setColor("bgBlue")}
            >
              {color === "bgBlue" && <img src={check} alt="" />}
            </button>
            <button
              type="button"
              className={styles.NoteContentCheckColorGrey}
              onClick={(e) => setColor("bgGrey")}
            >
              {color === "bgGrey" && <img src={check} alt="" />}
            </button>
            <button
              type="button"
              className={styles.NoteContentCheckColorBtnGreen}
              onClick={(e) => setColor("bgGreen")}
            >
              {color === "bgGreen" && <img src={check} alt="" />}
            </button>
          </div>
        </Col>
        <Col sm={1}></Col>
      </Row>
    </Container>
  );
};

export default NoteContent;
