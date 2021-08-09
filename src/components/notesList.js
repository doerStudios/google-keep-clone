import React, { useContext } from "react";
import { Col, Row, Form, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import NotesContext from "../context/notes-context";
import NoteItem from "./noteItem";
import { includes } from "lodash";

function NotesList(props) {
  const context = useContext(NotesContext);
  const { register, handleSubmit, watch } = useForm({});

  let notes = context.notes
    .filter((x) => {
      return (
        includes(x.title, watch("filterNote")) ||
        includes(x.note, watch("filterNote"))
      );
    })
    .map((x, i) => {
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
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  size="lg"
                  placeholder="search.."
                  {...register("filterNote")}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <Row className="notes__card">{notes}</Row>
    </>
  );
}

export default NotesList;
