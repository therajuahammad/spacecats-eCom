import {Formik} from "formik";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

const SigninPage = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    import {loginUser} from "../global/slices/authSlice";


    const handleSubmit = (values) => {
        console.log(values);
        // dispatch(loginUser(user));
    };


    return (
        <div className="col-4 m-auto">
            <h2>WELCOME PLEASE SIGN IN!</h2>

            <Formik
                onSubmit={handleSubmit}
                initialValues={{username: "", password: ""}}
            >
                {({handleSubmit, handleChange, values}) => (
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                            />
                        </FormGroup>

                        <Button
                            type="submit"
                        >
                            Sign In
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SigninPage;
