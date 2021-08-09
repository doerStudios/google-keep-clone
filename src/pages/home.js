import React, { Component } from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import NotesList from "../components/notesList";
import NotesModal from "../components/notesModal";
import NotesContext from "../context/notes-context";

export default class Workflows extends Component {
  state = {
    note: {},
    isLoading: false,
    showCreateNotesModal: false,
  };

  static context = NotesContext;

  createNoteHandler = () => {
    this.setState({ note: {}, showCreateNotesModal: true });
  };

  editNoteHandler = (data) => {
    this.setState({ note: data, showCreateNotesModal: true });
  };

  render() {
    return (
      <>
        <Container>
          <Row className="p-4 center-block">
            <Col className="text-center">
              <Button variant="dark" size="lg" onClick={this.createNoteHandler}>
                Create Note <Plus fontSize="1.5rem" />
              </Button>
            </Col>
          </Row>
          <Row className="p-4">
            <NotesList editNote={this.editNoteHandler} />
          </Row>
          {this.state.showCreateNotesModal && (
            <NotesModal
              note={this.state.note}
              show={this.state.showCreateNotesModal}
              onHide={() => this.setState({ showCreateNotesModal: false })}
            />
          )}
        </Container>
      </>
    );
  }
}
