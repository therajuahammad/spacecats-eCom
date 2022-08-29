import * as yup from "yup";
import {Formik} from "formik";
import {useRouter} from "next/router";
import HomeLayout from "../layouts/homeLayout";
import axios from "axios";
import cogoToast from "cogo-toast";
import Link from "next/link";
import {Button, Col, Container, Form, FormFeedback, FormGroup, Input, Label, Row} from "reactstrap";

const validationSchema = yup.object().shape({
    firstname: yup.string().required("Firstname is required."),
    lastname: yup.string().required("Lastname is required."),
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required."),
    address: yup.string().required("Address is required."),
    phone: yup.string().required("Phone is required."),
    email: yup.string().email().required("Email is required."),
});

const defaultValue = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    address: "",
    phone: "",
}

const SignupPage = () => {
    const router = useRouter();


    const handleSubmit = (values) => {
        const {
            firstname,
            lastname,
            email,
            username,
            password,
            address,
            phone
        } = values;

        axios.post(`https://fakestoreapi.com/users`, JSON.stringify({
            email,
            phone,
            password,
            username,
            address: {street: address},
            name: {firstname, lastname}
        })).then(res => {
            if (res) {
                cogoToast.success("Signup Successfully, please login!");
                router.push('/signin');
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
                        <h3 className="text-center fw-bold mb-4">WELCOME <br/>PLEASE SIGN UP!</h3>

                        <Formik
                            onSubmit={handleSubmit}
                            initialValues={defaultValue}
                            validationSchema={validationSchema}
                        >
                            {({handleSubmit, handleChange, errors, touched}) => (
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label style={labelStyle} className="fw-medium" for="firstname">Firstname</Label>
                                        <Input
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            style={inputStyle}
                                            onChange={handleChange}
                                            className="border-0 rounded-0 py-3"
                                            invalid={Boolean(errors.firstname && touched.firstname)}
                                        />
                                        {Boolean(errors.firstname && touched.firstname) && (
                                            <FormFeedback>{errors.firstname}</FormFeedback>
                                        )}
                                    </FormGroup>

                                    <FormGroup>
                                        <Label style={labelStyle} className="fw-medium" for="lastname">Lastname</Label>
                                        <Input
                                            id="lastname"
                                            name="lastname"
                                            type="text"
                                            style={inputStyle}
                                            onChange={handleChange}
                                            className="border-0 rounded-0 py-3"
                                            invalid={Boolean(errors.lastname && touched.lastname)}
                                        />
                                        {Boolean(errors.lastname && touched.lastname) && (
                                            <FormFeedback>{errors.lastname}</FormFeedback>
                                        )}
                                    </FormGroup>

                                    <FormGroup>
                                        <Label style={labelStyle} className="fw-medium" for="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="text"
                                            style={inputStyle}
                                            onChange={handleChange}
                                            className="border-0 rounded-0 py-3"
                                            invalid={Boolean(errors.email && touched.email)}
                                        />
                                        {Boolean(errors.email && touched.email) && (
                                            <FormFeedback>{errors.email}</FormFeedback>
                                        )}
                                    </FormGroup>

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

                                    <FormGroup>
                                        <Label style={labelStyle} className="fw-medium" for="address">Address</Label>
                                        <Input
                                            id="address"
                                            name="address"
                                            type="address"
                                            style={inputStyle}
                                            onChange={handleChange}
                                            className="border-0 rounded-0 py-3"
                                            invalid={Boolean(errors.address && touched.address)}
                                        />
                                        {Boolean(errors.address && touched.address) && (
                                            <FormFeedback>{errors.address}</FormFeedback>
                                        )}
                                    </FormGroup>

                                    <FormGroup>
                                        <Label style={labelStyle} className="fw-medium" for="phone">Phone</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="phone"
                                            style={inputStyle}
                                            onChange={handleChange}
                                            className="border-0 rounded-0 py-3"
                                            invalid={Boolean(errors.phone && touched.phone)}
                                        />
                                        {Boolean(errors.phone && touched.phone) && (
                                            <FormFeedback>{errors.phone}</FormFeedback>
                                        )}
                                    </FormGroup>

                                    <Button
                                        type="submit"
                                        style={{background: "#F09522"}}
                                        className="w-100 rounded-0 border-0 py-3 mt-3"
                                    >
                                        Signup
                                    </Button>

                                    <Link href="/signin">
                                        <Button
                                            type="submit"
                                            outline={true}
                                            style={{background: "#000"}}
                                            className="w-100 rounded-0 border-0 py-3 mt-3 text-white"
                                        >
                                            Sign in
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

export default SignupPage;
