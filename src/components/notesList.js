import React, { useContext } from "react";
import NotesContext from "../context/notes-context";

function NotesList() {
  const context = useContext(NotesContext);

  return <div> notes list {JSON.stringify(context.notes)}</div>;
}

export default NotesList;
