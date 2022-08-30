import HomeLayout from "../../layouts/homeLayout";
import Services from "../../components/Services";
import PopularProducts from "../../components/PopularProducts";
import axios from "axios";
import {Button, Col, Container, Row} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {addToCartAction, removeCartAction} from "../../global/actions/cartActions";
import cogoToast from "cogo-toast";

const ProductDetailsPage = ({products, product}) => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const isInCart = Boolean(cart?.find(pro => pro.id === product.id));

    const onAddToCartHandler = (rest) => {
        dispatch(addToCartAction({...rest, quality: 1}));
        cogoToast.success(
            `${rest?.title} is added to cart.`, {
                position: "top-center",
                hideAfter: 3
            }
        );
    }

    const onRemoveFromCartHandler = (rest) => {
        dispatch(removeCartAction({...rest, quality: 1}));
        cogoToast.error(
            `${rest?.title} is remove from cart.`, {
                position: "top-center",
                hideAfter: 3
            }
        );
    }

    return (
        <HomeLayout>
            <div>
                <Container>
                    <Row className="align-items-center" style={{rowGap: 40}}>
                        <Col md={6} lg={5}>
                            <img className="w-100" src={product.image} alt={product.title}/>
                        </Col>

                        <Col>
                            <div>
                                <h2 className="text-black fw-semibold mb-4">{product.title}</h2>
                                <span className="fw-semibold fs-4 d-block mb-3" style={{color: "#F09522"}}>${product.price}</span>
                                <p className="text-black" style={{fontSize: 14, lineHeight: 1.8}}>{product.description}</p>
                                <Button
                                    style={{background: "rgba(189, 189, 189, 0.45)"}}
                                    className="mt-4 rounded-0 border-0 text-black fw-semibold py-3 px-5"
                                    onClick={() => {
                                        isInCart ? onRemoveFromCartHandler(product) : onAddToCartHandler(product);
                                    }}
                                >
                                    {!isInCart ? "Add to Cart" : "Remove from Cart"}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Services/>
            <PopularProducts products={products}/>
        </HomeLayout>
    );
};

export const getStaticProps = async ({params}) => {
    const products = await axios.get("https://fakestoreapi.com/products?limit=4&sort=asec");
    const product = await axios.get(`https://fakestoreapi.com/products/${parseInt(params.id)}`);
    return {
        props: {
            products: products.data,
            product: product.data
        }
    }
}

export const getStaticPaths = async () => {
    const data = await axios.get("https://fakestoreapi.com/products?limit=4&sort=desc");
    const products = data.data;

    const paths = products.map(product => {
        return {
            params: {id: product.id.toString()}
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export default ProductDetailsPage;
