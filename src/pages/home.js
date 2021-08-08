import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import NotesList from "../components/notesList";
import NotesModal from "../components/notesModal";

export default class Workflows extends Component {
  state = {
    notes: [],
    isLoading: false,
    showCreateNotesModal: false,
  };

  render() {
    return (
      <>
        <div className="">
          <h1>Notes</h1>
          <Row>
            <Col className="center">
              <Button
                variant="dark"
                size="lg"
                onClick={this.createWorkflowHandler}
              >
                Create Note <Plus fontSize="1.2rem" />
              </Button>
            </Col>
          </Row>
          <Row>
            <NotesList />
          </Row>
          <NotesModal />
        </div>
      </>
    );
  }
}
