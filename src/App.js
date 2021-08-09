import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HomePage from "./pages/home";
import "./App.css";
import { Component } from "react";
import NotesContext from "./context/notes-context";
import { findIndex } from "lodash";

class App extends Component {
  state = {
    notes: [],
  };

  createNote = (data) => {
    data.id = Date.now();
    const _arr = [...this.state.notes, data];
    this.setState({ notes: _arr });
  };
  editNote = (data) => {
    let arr = [...this.state.notes];
    const i = findIndex(arr, { id: data.id });
    arr[i] = data;
    this.setState({ notes: arr });
  };
  deleteNote = (i) => {
    let arr = [...this.state.notes];
    arr.splice(i, 1);
    this.setState({ notes: arr });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NotesContext.Provider
            value={{
              notes: this.state.notes,
              createNote: this.createNote,
              editNote: this.editNote,
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
