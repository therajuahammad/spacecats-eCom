import * as yup from "yup";
import {Formik} from "formik";
import {useRouter} from "next/router";
import {Button, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row} from "reactstrap";
import HomeLayout from "../layouts/homeLayout";
import {useDispatch} from "react-redux";
import axios from "axios";
import {loginAction as login} from "../global/actions/authActions";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import cogoToast from "cogo-toast";
import Link from "next/link";

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required."),
});

const defaultValue = {username: "", password: ""}

const SigninPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();


    const handleSubmit = (values) => {
        axios.post(`https://fakestoreapi.com/auth/login`, {
            username: values.username,
            password: values.password,
        }).then(async (res) => {
            if (res) {
                const token = res.data.token;
                Cookies.set("token", token);
                const username = jwtDecode(token);
                await dispatch(login({
                    token,
                    username: username.user,
                    isAuthorize: true
                }));
                cogoToast.success("Successfully login!");
                router.push('/');
            }
        }).catch(err => {
            cogoToast.error(err.response.data);
        })
    };


    return (
        <HomeLayout>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={5}>
                        <h3 className="text-center fw-bold mb-4">WELCOME <br/>PLEASE SIGN IN!</h3>

                        <Formik
                            onSubmit={handleSubmit}
                            initialValues={defaultValue}
                            validationSchema={validationSchema}
                        >
                            {({handleSubmit, handleChange, errors, touched}) => (
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label style={labelStyle} className="fw-medium" for="username">Username</Label>
                                        <Input
                                            id="username"
                                            name="username"
                                            type="text"
                                            style={inputStyle}
                                            onChange={handleChange}
                                            className="border-0 rounded-0 py-3"
                                            invalid={Boolean(errors.username && touched.username)}
                                        />
                                        {Boolean(errors.username && touched.username) && (
                                            <FormFeedback>{errors.username}</FormFeedback>
                                        )}
                                    </FormGroup>

                                    <FormGroup>
                                        <Label style={labelStyle} className="fw-medium" for="password">Password</Label>
                                        <Input
                                            id="password"
                                            name="password"
                                            type="password"
                                            style={inputStyle}
                                            onChange={handleChange}
                                            className="border-0 rounded-0 py-3"
                                            invalid={Boolean(errors.password && touched.password)}
                                        />
                                        {Boolean(errors.password && touched.password) && (
                                            <FormFeedback>{errors.password}</FormFeedback>
                                        )}
                                    </FormGroup>

                                    <Button
                                        type="submit"
                                        style={{background: "#F09522"}}
                                        className="w-100 rounded-0 border-0 py-3 mt-3"
                                    >
                                        Sign In
                                    </Button>

                                    <Link href="/signup">
                                        <Button
                                            type="submit"
                                            outline={true}
                                            style={{background: "#000"}}
                                            className="w-100 rounded-0 border-0 py-3 mt-3 text-white"
                                        >
                                            Signup
                                        </Button>
                                    </Link>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </HomeLayout>
    );
};

export const labelStyle = {
    fontSize: "12px",
}

export const inputStyle = {
    backgroundColor: "#EEEEEE"
}

export default SigninPage;
