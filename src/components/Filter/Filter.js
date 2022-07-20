import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div>
      <Container fluid className={styles.container}>
        <Row>
          <Col></Col>
          <Col>
            <input
              type="text"
              placeholder="Search Notes"
              className={styles.searchInput}
              aria-label="Search"
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Filter;
