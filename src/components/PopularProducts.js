import React from 'react';
import {Col, Container, Row} from "reactstrap";
import Product from "./Product";

const PopularProducts = ({products}) => {
    return (
        <div className="mt-5 pt-5">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="fw-bold fs-2">Popular Products</h2>
                    <p className="fw-medium">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <Row style={{rowGap: 30}}>
                    {products.map(product => (
                        <Col sm={6} lg={3} key={product.id}>
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PopularProducts;
