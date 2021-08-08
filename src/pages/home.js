import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import NotesList from "../components/notesList";
import NotesModal from "../components/notesModal";
import NotesContext from "../context/notes-context";

export default class Workflows extends Component {
  state = {
    notes: [],
    isLoading: false,
    showCreateNotesModal: false,
  };

  static context = NotesContext;

  createNoteHandler = () => {
    this.setState({ showCreateNotesModal: true });
  };

  render() {
    return (
      <>
        <div className="">
          <Row className="p-4 text-center">
            <Button variant="dark" size="lg" onClick={this.createNoteHandler}>
              Create Note <Plus fontSize="1.2rem" />
            </Button>
          </Row>
          <Row className="p-4">
            <NotesList />
          </Row>
          <NotesModal
            show={this.state.showCreateNotesModal}
            onHide={() => this.setState({ showCreateNotesModal: false })}
          />
        </div>
      </>
    );
  }
}
