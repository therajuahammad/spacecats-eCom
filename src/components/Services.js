import {Col, Container, Row} from "reactstrap";

const Services = () => {
    return (
        <div style={{padding: "150px 0 80px"}}>
            <Container>
                <Row style={{rowGap: 30}}>
                    <Col xs={6} lg={3}>
                        <div className="service__item d-flex">
                            <img src="/images/icons/delivery.png" alt="car icon"/>
                            <div className="service__content ms-2">
                                <h3 className="mb-0 fw-bold text-uppercase" style={{fontSize: "14px"}}>fast delivery</h3>
                                <p className="mb-0" style={{fontSize: "12px"}}>Lorem Ipsum is simply dummy text </p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={6} lg={3}>
                        <div className="service__item d-flex">
                            <img src="/images/icons/delivery.png" alt="car icon"/>
                            <div className="service__content ms-2">
                                <h3 className="mb-0 fw-bold text-uppercase" style={{fontSize: "14px"}}>fast delivery</h3>
                                <p className="mb-0" style={{fontSize: "12px"}}>Lorem Ipsum is simply dummy text </p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={6} lg={3}>
                        <div className="service__item d-flex">
                            <img src="/images/icons/delivery.png" alt="car icon"/>
                            <div className="service__content ms-2">
                                <h3 className="mb-0 fw-bold text-uppercase" style={{fontSize: "14px"}}>fast delivery</h3>
                                <p className="mb-0" style={{fontSize: "12px"}}>Lorem Ipsum is simply dummy text </p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={6} lg={3}>
                        <div className="service__item d-flex">
                            <img src="/images/icons/delivery.png" alt="car icon"/>
                            <div className="service__content ms-2">
                                <h3 className="mb-0 fw-bold text-uppercase" style={{fontSize: "14px"}}>fast delivery</h3>
                                <p className="mb-0" style={{fontSize: "12px"}}>Lorem Ipsum is simply dummy text </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;
