import React from 'react'
import { Container } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import { userContext } from '../..'

export default function List() {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <ListGroup>
                    <userContext.Consumer>
                        {userValue => (
                            <ListGroup.Item action variant="info">
                                I am: {userValue}
                            </ListGroup.Item>
                        )}
                    </userContext.Consumer>
                    <userContext.Consumer>
                        {userValue => (
                            <ListGroup.Item action variant="success">
                                I am: {userValue}
                            </ListGroup.Item>
                        )}
                    </userContext.Consumer>
                    <userContext.Consumer>
                        {userValue => (
                            <ListGroup.Item action variant="danger">
                                I am: {userValue}
                            </ListGroup.Item>
                        )}
                    </userContext.Consumer>
                    {/* <ListGroup.Item action variant="danger">
                        I am B
                    </ListGroup.Item>
                    <ListGroup.Item action variant="danger">
                        I am C
                    </ListGroup.Item> */}
                </ListGroup>
            </Container>
        </>
    )
}
