import {Col, Container, Row} from "reactstrap";

const CategoriesBanner = () => {
    return (
        <div style={{background: "#FAFAFA", padding: "150px 0"}}>
            <Container>
                <Row style={{rowGap: 30}}>
                    <Col sm={6} md={4}>
                        <div className="category-banner overlay">
                            <img className="w-100" src="/images/off-sale-men.png" alt="sale"/>
                        </div>
                    </Col>

                    <Col sm={6} md={4}>
                        <div className="category-banner overlay">
                            <img className="w-100" src="/images/weomen-collection.png" alt="sale"/>
                            {/*<div className="banner-text fs-2">*/}
                            {/*    Up to <span>50%</span>*/}
                            {/*    off sale*/}
                            {/*</div>*/}
                        </div>
                    </Col>

                    <Col sm={6} md={4}>
                        <div className="category-banner overlay">
                            <img className="w-100" src="/images/men-collection.png" alt="sale"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CategoriesBanner;
