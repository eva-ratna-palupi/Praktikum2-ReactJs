import React, { Component } from 'react'
import { Jumbotron, Container, } from 'reactstrap'

class BootstrapComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (

            <div>
                <Container>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Hallo!</h1>
                        <p className="lead"> Selamat datang di Aplikasi Bengkel Online</p>
                        <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </Container>
                </Jumbotron>
                </Container>
            </div>
        )
    }

}

export default BootstrapComp