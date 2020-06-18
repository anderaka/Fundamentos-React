import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import {Container, Card, Row, Col} from "react-bootstrap";
import { withRouter } from "react-router-dom";

import './Ads.css';

export class Advertisments extends Component {
    constructor(props){
        super(props);
        this.state = {

            ads: []

        }
    }

    navigateToEdit = (id, name, description, price, type, photo, tags) => {

        const { history } = this.props;
        history.push({
            pathname: "/editar",
            search: `?id=${id}`,
            state: { 

                name: name,
                desc: description,
                price: price,
                type: type,
                photo: photo,
                tags: tags

            }

        });
    }

    componentDidMount = async () => {
        const { history } = this.props;

        axios.defaults.withCredentials = true;
        await axios.get('http://34.89.93.186:8080/apiv1/anuncios'
        ).then(res => {

            const ads = res.data.results;
            this.setState({ ads });
        }).catch(() => {

            alert(`No se ha podido recuperar los anuncios, vuelve a intentarlo`);
            history.push("/login");
        })
    }

    navigateToDetail = (id) => {
        const { history } = this.props;
        history.push({
            pathname: `/detail/${id}`
        })
    }

    render() {
        
        const { ads } = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <Link className="create-link" to="/crear">Crear anuncio</Link>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    { ads.map(ad => 
                        <Col key={ad._id} className="col-12 col-sm-6 col-lg-4 mb-4" >
                            <Card onClick={() => {this.navigateToDetail(ad._id)}}>
                                <Card.Img className="img-card" variant="top" src={ad.photo} />
                                <Card.Body>
                                    <Card.Title>{ad.name}</Card.Title>
                                    <Card.Text as={"div"}>
                                        <dl>
                                            <dt>Precio: {ad.price} €</dt>

                                            <dt>Desc:</dt>
                                            <dd>{ad.description}</dd>

                                            <dt>Tipo:</dt>
                                            <dd>{ad.type}</dd>

                                            <dt>Tags:</dt>
                                            { ad.tags && ad.tags.map(tag => (
                                                <dd key={tag}>
                                                    {tag}
                                                </dd>
                                            ))
                                            }

                                            <dt>created:</dt>
                                            <dd>created: {ad.createdAt}</dd>
                                        </dl>
                                    </Card.Text>
                                    <Card.Footer>
                                        <small className="text-muted">Última actualización: {ad.updatedAt}</small>
                                    </Card.Footer>
                                </Card.Body>
                                
                            </Card>

                            <button className="btn-edit" onClick={() => { this.navigateToEdit(ad._id, ad.name, ad.description, ad.price, ad.type, ad.photo, ad.tags)}}>Editar Anuncio</button>
                        </Col>
                    )}          
                </Row>
            </Container>         
        )
    }
}

export default withRouter(Advertisments);
