import React, { useContext } from "react";
import { Card, Col, Row, Dropdown } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import ActionDropdown from "./actionDropdown";
import NotesContext from "../context/notes-context";
import NotesModal from "./notesModal";

function NoteItem(props) {
  const context = useContext(NotesContext);

  const removeWorkflow = () => {};

  return (
    <>
      <Col xs={12} md={4} style={{ marginTop: "1.5rem" }}>
        <Card>
          <Card.Body key={props?.id}>
            <Card.Title>{props?.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {props?.note}
            </Card.Subtitle>
            {/* <Card.Text>{this.props.listing?.streetName}</Card.Text> */}
            <Row style={{ float: "right", paddingRight: "0.5rem" }}>
              <Dropdown>
                <Dropdown.Toggle
                  as={ActionDropdown}
                  id="dropdown-custom-components"
                ></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={console.log()}>Edit</Dropdown.Item>
                  <Dropdown.Item onClick={() => context.deleteNote(props.id)}>
                    Remove
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default NoteItem;
