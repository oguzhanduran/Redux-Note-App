import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Filter.module.css";
import { useSelector } from "react-redux";
import { searchNote } from "../../redux/notes/notesSlice";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";

const Filter = () => {
  const items = useSelector((state) => state.notes.items);
  console.log(items);

  // const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  // function handleChange(e) {
  //   dispatch(searchNote(e.target.value));
  // }
  return (
    <div>
      <Container className={styles.container}>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <input
              type="text"
              placeholder="Search Notes"
              className={styles.searchInput}
              aria-label="Search"
              onChange={(e) => dispatch(searchNote(e.target.value))}
              // value={title}
            />
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Filter;
