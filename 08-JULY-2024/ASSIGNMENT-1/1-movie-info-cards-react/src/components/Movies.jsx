import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';
import { dummyData } from '../utils/constants';
import { useState } from 'react';

const Movies = () => {
  const [moviesData] = useState(dummyData);
  return (
    <Container className='custom-container'>
      <Row>
        {moviesData.map((data) => (
          <Col md={4} key={data.id}>
            <MovieCard data={data} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;
