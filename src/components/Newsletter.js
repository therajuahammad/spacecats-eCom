import {Button, Col, Container, Input, Row} from "reactstrap";

const Newsletter = () => {
    return (
        <Container style={{paddingTop: "100px"}}>
            <div style={{background: "rgba(240,149,34, 0.25)"}}>
                <Row className="align-items-center">
                    <Col lg={7}>
                        <div className="p-5 ps-lg-5 ms-lg-5 pe-lg-5">
                            <div className="text-center text-md-start ps-lg-4 ms-lg-5 me-lg-2">
                                <h2 className="fw-bold">SIGN UP FOR NEWS & GET 20% OFF</h2>

                                <div className="d-flex mt-4">
                                    <Input
                                        style={{fontSize: "12px"}}
                                        placeholder="Your email address"
                                        className="rounded-0 border-0 py-3"
                                    />
                                    <Button
                                        style={{background: "#F09522"}}
                                        className="rounded-0 border-0 py-3 px-4 text-nowrap"
                                    >
                                        Sign up
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={5}>
                        <img className="w-100" src="/images/newsletter.png" alt="newsletter"/>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Newsletter;
