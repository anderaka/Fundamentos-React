import React, {Component} from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";
import {withRouter} from "react-router-dom";

import axios from "axios";

class AdDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            ad: []
        }
    }

    componentDidMount = async () => {
        const {match: {params}} = this.props;

        const { history } = this.props;

        
        axios.defaults.withCredentials = true;
        await axios.get(`http://34.89.93.186:8080/apiv1/anuncios/${params.id}`
        ).then(res => {
        const ad = res.data.result;
        this.setState({ad:ad})
        }).catch(err => {
            alert(`No se ha podido recuperar los anuncios, pillín, loguéate`);
            history.push("/login");
        })
    }

    Back = () => {
        const {history} = this.props;
        history.goBack();
    }
    
    render(){
        const { ad } = this.state;
                
        return(
            <Container>
                <Row>
                    <Col>
                        <button onClick={this.Back}>Volver</button>
                    </Col>
                </Row>

                <Row>
                    <Col className="mt-5">
                        <h2>{ad.name}</h2>
                        <Image src={ad.photo} fluid />

                        <dl>
                            <dt>Precio: {ad.price} €</dt>

                            <dt>Desc:</dt>
                            <dd>{ad.description}</dd>

                            <dt>Tipo:</dt>
                            <dd>{ad.type}</dd>

                            <dt>Tags:</dt>
                            { ad.tags && ad.tags.map(tag => (
                                <dd key={tag}>
                                    <span>{tag}</span>
                                </dd>
                            ))
                        }
                        </dl>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withRouter(AdDetail);