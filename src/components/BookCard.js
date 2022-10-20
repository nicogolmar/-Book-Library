import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Card style={{ width: "18rem", margin: "15px", height: "40rem" }}>
      <Card.Img variant="top" src={book.imageLink} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.description}</Card.Text>
        <Link to={`/DetailBook/${book.id}`}>
          <Button variant="primary">See more information</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
