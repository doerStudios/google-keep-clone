import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import NotesContext from "../context/notes-context";
import NoteItem from "./noteItem";

function NotesList(props) {
  const context = useContext(NotesContext);
  let notes = context.notes.map((x, i) => {
    return (
      <NoteItem
        key={x.id}
        id={x.id}
        title={x.title}
        note={x.note}
        index={i}
        editNote={(note) => {
          props.editNote(note);
        }}
      />
    );
  });

  return (
    <>
      <Row className="notes__card">{notes}</Row>
    </>
  );
}

export default NotesList;
