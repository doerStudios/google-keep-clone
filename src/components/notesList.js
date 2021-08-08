import React, { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import NotesContext from "../context/notes-context";
import NoteItem from "./noteItem";

function NotesList() {
  const context = useContext(NotesContext);
  let notes = context.notes.map((x, i) => {
    return <NoteItem key={x.id} title={x.title} note={x.note} index={i} />;
  });

  return (
    <>
      <Row className="notes__card">{notes}</Row>
    </>
  );
}

export default NotesList;
