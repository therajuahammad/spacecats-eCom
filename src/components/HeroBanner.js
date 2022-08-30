import {Col, Container, Row} from "reactstrap";
import Countdown from "./Countdown";

const HeroBanner = () => {
    return (
        <section className="pb-3">
            <Container className="position-relative">
                <Row>
                    <Col className="d-lg-none">
                        <img className="w-100 mb-5" src="/images/hero-banner.png" alt="man photo"/>
                    </Col>
                    <Col lg={6}>
                       <div className="pe-md-5 me-md-3">
                           <div className="hero__content">
                               <div className="hero__title">
                                   <h1 className="text-capitalize fw-bold">Top Designers Pick</h1>
                               </div>
                               <div className="hero__disc my-4">
                                   <p>It is a long established fact that a reader will be distracted by the
                                       readable content of a page when looking at its layout. The point of
                                       using Lorem Ipsum is that it has a more-or-less</p>
                               </div>
                               <div className="hero__link">
                                   <a
                                       href="/"
                                       style={{background: "#F09522", fontSize: "12px"}}
                                       className="btn rounded-0 border-0 text-white py-3 px-5"
                                   >
                                       Shop Now
                                   </a>
                               </div>
                           </div>

                           <Countdown/>
                       </div>
                    </Col>
                </Row>
                <div className="d-none d-lg-block position-absolute end-0 top-50 translate-middle-y text-end" style={{maxWidth: "500px"}}>
                    <img className="w-100" src="/images/hero-banner.png" alt="man photo"/>
                </div>
            </Container>
        </section>
    );
};

export default HeroBanner;
