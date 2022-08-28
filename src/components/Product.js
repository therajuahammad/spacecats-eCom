import {Button} from "reactstrap";
import cogoToast from "cogo-toast";
import {useDispatch, useSelector} from "react-redux";
import {addToCartAction, removeCartAction} from "../global/actions/cartActions";
import Link from "next/link";

const Product = ({product}) => {
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
        <div className="product position-relative">
            <figure className="product_thumb overlay text-center">
                <img
                    className="w-100"
                    src={product.image}
                    alt={product.title}
                    style={{objectFit: "contain", height: "250px"}}
                />
                <Button
                    onClick={() => {
                        isInCart ? onRemoveFromCartHandler(product) : onAddToCartHandler(product);
                    }}
                    style={{fontSize: "12px", backgroundColor: "#F09522"}}
                    className="btn-add-to-cart fw-semibold rounded-0 border-0 py-2 px-4 position-absolute d-block top-50 start-50 translate-middle text-nowrap mt-4"
                >
                    {!isInCart ? "Add to Cart" : "Remove from Cart"}
                </Button>
            </figure>
            <div>
                <span className="fw-medium" style={{fontSize: "14px"}}>{product.category}</span>
            </div>
            <h3 className="fw-semibold mt-1" style={{fontSize: "18px"}}>
                <Link href={`/product/${product.id}`}>
                    <a className="text-decoration-none text-black">{product.title}</a>
                </Link>
            </h3>
            <div
                className="fw-semibold mt-2"
                style={{
                    color: '#F09522',
                    fontSize: '22px'
                }}
            >
                ${product.price}
            </div>
        </div>
    );
};

export default Product;
