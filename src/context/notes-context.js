import React from "react";

// Global Variable
export default React.createContext({
  notes: [],
  createNote: () => {},
  editNote: () => {},
  deleteNote: () => {},
});
