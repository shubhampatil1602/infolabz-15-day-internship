import useFetchApi from '../hooks/useFetchApi';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PrintTable = () => {
  const { apiData } = useFetchApi();

  console.log(apiData);
  return (
    <div>
      <Container className='custom-container'>
        <Row>
          {apiData?.map((data) => (
            <Col md={4} key={data.id}>
              <CardD key={data?.hashId} data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PrintTable;

const CardD = ({ data }) => {
  const { imageUrl, categoryNames, title, content, authorName } = data;
  return (
    <Card style={{ width: '18rem', marginBottom: '16px' }}>
      <Card.Header>
        <button
          style={{
            color: 'white',
            fontSize: '12px',
            borderRadius: '5px',
            padding: '2px 6px',
            textTransform: 'uppercase',
            backgroundColor: `green`,
            fontWeight: 'bold',
            border: 'none',
          }}
        >
          {categoryNames[0]}
        </button>
      </Card.Header>
      <Card.Img
        variant='top'
        src={imageUrl}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '210px',
        }}
      />
      <Card.Body
        style={{
          height: '420px',
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>

      <Card.Footer>
        <small className='text-muted fst-italic'>
          Author Name:{authorName}
        </small>
      </Card.Footer>
    </Card>
  );
};
