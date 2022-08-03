import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Filter.module.css";
import { searchNote } from "../../redux/notes/notesSlice";
import { useDispatch } from "react-redux/es/exports";

const Filter = () => {
  const dispatch = useDispatch();

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
              onChange={(e) => dispatch(searchNote(e.target.value))} // Search butonuna girilen değerler, searchNote fonksiyonu aracılığı ile dispatch edilerek notesSlice'a gönderildi.
            />
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Filter;
