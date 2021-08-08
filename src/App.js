import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HomePage from "./pages/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Row className="justify-content-center p-4">
            <Switch>
              <Route path="/" component={HomePage} />
            </Switch>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
