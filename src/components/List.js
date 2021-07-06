import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function List(props) {
  const peopleArr =   props.people
  
    return (
        <Container>
    {peopleArr.map((one, index) =>
        <Row className="m-3 p-2  border border-primary" key={index}>
            <Col >
                <img src={one.picture.thumbnail} alt="..." />
            </Col>
            <Col >
                {one.name.first} {one.name.last}
            </Col>
            <Col>
                {one.location.city}, {one.location.state}
            </Col>
            <Col >
                {one.dob.age}
            </Col>
            <Col className="text-center">
                {one.nat}
            </Col>
        </Row>
        
    )}
    </Container>

    )
}

export default List;