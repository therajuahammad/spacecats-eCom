import {Col, Container, Row} from "reactstrap";

const CategoriesBanner = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col lg={4}>
                    <div className="category-banner overlay">
                        <img className="w-100" src="/images/off-sale-men.png" alt="sale"/>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="category-banner overlay">
                        <img className="w-100" src="/images/weomen-collection.png" alt="sale"/>
                        {/*<div className="banner-text fs-2">*/}
                        {/*    Up to <span>50%</span>*/}
                        {/*    off sale*/}
                        {/*</div>*/}
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="category-banner overlay">
                        <img className="w-100" src="/images/men-collection.png" alt="sale"/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CategoriesBanner;
