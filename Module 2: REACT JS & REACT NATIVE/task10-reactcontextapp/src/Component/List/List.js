import React from 'react'
import { Container } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'

export default function List() {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <ListGroup>
                    <ListGroup.Item action variant="success">
                        I am A
                    </ListGroup.Item>
                    <ListGroup.Item action variant="primary">
                        I am B
                    </ListGroup.Item>
                    <ListGroup.Item action variant="warning">
                        I am C
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </>
    )
}
