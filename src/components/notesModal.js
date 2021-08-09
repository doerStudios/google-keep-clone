import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Col, Row, Form, Modal, Button, Card } from "react-bootstrap";
import NotesContext from "../context/notes-context";

function NotesModal(props) {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: props.note?.id,
      title: props.note?.title,
      note: props.note?.note,
    },
  });

  const context = useContext(NotesContext);

  const onSubmit = async (data) => {
    console.log("submission data", data);
    if (!data.id) {
      context.createNote(data);
    } else {
      context.editNote(data);
    }
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {watch("title")}
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Row>
            <Form.Group as={Col}>
              {/* <Form.Label>Title</Form.Label> */}
              <Form.Control
                size="lg"
                type="text"
                placeholder="Title"
                {...register("title")}
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              {/* <Form.Label>Note</Form.Label> */}
              <Form.Control
                size="lg"
                as="textarea"
                placeholder="Notes"
                required
                {...register("note")}
              ></Form.Control>
            </Form.Group>
          </Row>
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Button variant="dark" type="submit" size="lg">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default NotesModal;
