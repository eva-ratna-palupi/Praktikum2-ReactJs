import React from 'react';
import {Jumbotron, Container} from 'reactstrap';

const Homepage = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3">Home!</h1>
                            <p className="lead"> Aplikasi Bengkel Online</p>
                            <p className="text-info">Created by: Eva Ratna Palupi</p>
                        </Container>
            </Jumbotron>
        </div>
    );
}

export default Homepage;
