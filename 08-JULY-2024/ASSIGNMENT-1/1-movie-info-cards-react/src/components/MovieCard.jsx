import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const MovieCard = ({ data }) => {
  const { trending, title, image, description, actor, actress, genre } = data;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>
        <button
          style={{
            color: 'white',
            fontSize: '12px',
            borderRadius: '5px',
            padding: '2px 6px',
            textTransform: 'uppercase',
            backgroundColor: `${
              trending === 'now trending' ? '#017BFF' : 'green'
            }`,
            fontWeight: 'bold',
            border: 'none',
          }}
        >
          {trending}
        </button>
      </Card.Header>
      <Card.Img
        variant='top'
        src={image}
        style={{
          objectFit: 'cover',
          objectPosition: 'top',
          width: '100%',
          height: '210px',
        }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroup.Item>{actor}</ListGroup.Item>
        <ListGroup.Item>{actress}</ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <small className='text-muted fst-italic'>{genre}</small>
      </Card.Footer>
    </Card>
  );
};

export default MovieCard;
