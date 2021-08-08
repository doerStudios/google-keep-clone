import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HomePage from "./pages/home";
import "./App.css";
import { Component } from "react";
import NotesContext from "./context/notes-context";

class App extends Component {
  state = {
    notes: [],
  };

  createNote = () => {};
  editNotes = () => {};
  deleteNote = () => {};

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NotesContext.Provider
            value={{
              notes: this.state.notes,
              createNote: this.createNote,
              editNotes: this.editNotes,
              deleteNote: this.deleteNote,
            }}
          >
            <Container>
              <Row className="justify-content-center p-4">
                <Switch>
                  <Route path="/" component={HomePage} />
                </Switch>
              </Row>
            </Container>
          </NotesContext.Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
