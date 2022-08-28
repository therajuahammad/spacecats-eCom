import {Button, Col, Container, Row} from "reactstrap";

const Header = () => {
    return (
        <header>
            <div className="header-top bg-black text-white py-3">
                <Container className="d-flex align-items-center justify-content-between">
                    <p className="fw-bold mb-0">Free shipping on all UK orders!</p>
                    <div className="icons d-flex gap-3">
                        <a href="/"><img src="/images/icons/fb.png" alt="fb"/></a>
                        <a href="/"><img src="/images/icons/instagram.png" alt="instagram"/></a>
                        <a href="/"><img src="/images/icons/pinterest.png" alt="pinterest"/></a>
                    </div>
                </Container>
            </div>

            <div className="header-bottom py-4">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={3}>
                            <a href="/">
                                <img src="/images/logo.png" alt="logo"/>
                            </a>
                        </Col>

                        <Col lg={9}>
                            <div className="d-flex align-items-center justify-content-end">
                                <nav className="main-menu">
                                    <ul className="d-flex list-unstyled gap-4 mb-0 fw-medium">
                                        <li><a className="text-black text-decoration-none" href="/">Home</a></li>
                                        <li><a className="text-black text-decoration-none" href="/">About</a></li>
                                        <li><a className="text-black text-decoration-none" href="/">Shop</a></li>
                                        <li><a className="text-black text-decoration-none" href="/">Pages</a></li>
                                        <li><a className="text-black text-decoration-none" href="/">Blog</a></li>
                                    </ul>
                                </nav>

                                <div className="header-actions d-flex gap-4">
                                    <Button className="p-0 bg-transparent border-0"><img src="/images/icons/search.png"/></Button>
                                    <Button className="p-0 bg-transparent border-0"><img src="/images/icons/user.png"/></Button>
                                    <Button className="p-0 bg-transparent border-0"><img src="/images/icons/bag.png"/></Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
};

export default Header;
