import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import PostsContext from "../utils/PostsContext"

function BookEditModal(props) {
  const { editBook } = useContext(PostsContext)
  const { show, setShow, book } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editBook(e, book.id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Title
            </Form.Label>
            <Col md="6">
              <Form.Control name="title" type="text" defaultValue={book.title} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Body
            </Form.Label>
            <Col md="6">
              <Form.Control as="textarea" name="body" rows={3} defaultValue={book.body} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Image
            </Form.Label>
            <Col md="6">
              <Form.Control type="url" name="image" defaultValue={book.image} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Owner
            </Form.Label>
            <Col md="6">
              <Form.Control name="owner" type="text" defaultValue={book.owner} />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit Book
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default BookEditModal
