import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { logInToProfile } from "../functionalApiActions";
import { Link, Redirect } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

export class Login extends Component {
    constructor(props) {
        super(props);

        let login = {
            name: "",
            phone: "",
        };
        this.state = {
            show: false,
            login: login,
        };
    }

    logging = (data, formAction) => {
        formAction.setSubmitting(true);
        logInToProfile(data, formAction).then(
            (response) => {
                formAction.setSubmitting(false);
                if (response) {
                    this.props.history.push(`/my-profile/${response.id}`);
                }
                // return <Redirect to={PAGE_URLS.MY_PROFILE} />
            },
            (error) => {
                formAction.setSubmitting(false);
            }
        );
    };
    handleShow = () => {
        this.setState({
            show: true,
        });
    };
    handleClose = () => {
        this.setState({
            show: false,
        });
    };

    render() {
        return (
            <div className="center">
                <div className="container" style={{ marginTop: "190px" }}>
                    <div>
                        <Formik
                            // validationSchema={AddGunSchema}
                            initialValues={this.state.login}
                            onSubmit={this.logging}
                            enableReinitialize={true}
                        >
                            {({ errors, isSubmitting, setFieldValue }) => (
                                <Form enctype="multipart/form-data">
                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 mb-1">
                                                <div className="form-group">
                                                    <label>Username: </label>
                                                    <Field
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Enter Username"
                                                    ></Field>
                                                    <ErrorMessage
                                                        name="name"
                                                        style={{
                                                            color: "red",
                                                        }}
                                                        component="div"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 mb-1">
                                                <div className="form-group">
                                                    <label>Password : </label>
                                                    <Field
                                                        type="text"
                                                        name="phone"
                                                        className="form-control"
                                                        placeholder="Enter password"
                                                    ></Field>
                                                    <ErrorMessage
                                                        name="phone"
                                                        style={{
                                                            color: "red",
                                                        }}
                                                        component="div"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Link
                                            className="btn btn-secondary"
                                            to={PAGE_URLS.HOME}
                                        >
                                            Back
                                        </Link>
                                        <Button
                                            variant={
                                                isSubmitting
                                                    ? "secondary"
                                                    : "primary"
                                            }
                                            type="submit"
                                        >
                                            Login
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
