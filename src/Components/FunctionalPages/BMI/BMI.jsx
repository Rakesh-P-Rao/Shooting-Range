import React, { Component } from "react";
import { calculate_BMI } from "../functionalApiActions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Modal, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

export class BMI extends Component {
    constructor(props) {
        super(props);

        let bmi = {
            height: "",
            weight: "",
        };

        this.state = {
            show: false,
            bmi: bmi,
        };
    }

    calculate_BMI = (data, formAction) => {
        formAction.setSubmitting(true);
        calculate_BMI(data, formAction).then(
            (response) => {
                formAction.setSubmitting(false);
                this.setState({
                    bmiVal: response.BMI,
                });
                this.handleClose();
                <Redirect to={PAGE_URLS.MY_PROFILE} />;
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

    showBMIResults = (bmi) => {
        if (bmi >= 18.5 && bmi <= 24.99) {
            return (
                <div class="alert alert-success">
                    <strong>
                        Your BMI is : {bmi} - You are in a healthy weight range
                    </strong>
                </div>
            );
        } else if (bmi >= 25 && bmi <= 29.9) {
            return (
                <div class="alert alert-warning">
                    <strong>Your BMI is : {bmi} - You are overweight</strong>
                </div>
            );
        } else if (bmi >= 30) {
            return (
                <div class="alert alert-danger">
                    <strong>Your BMI is : {bmi} - You are obese</strong>
                </div>
            );
        } else if (bmi < 18.5) {
            return (
                <div class="alert alert-secondary">
                    <strong>Your BMI is : {bmi} - You are under weight</strong>
                </div>
            );
        }
    };

    render() {
        return (
            <div className="center">
                <div style={{ marginTop: "190px" }}>
                    <div className="container">
                        <Formik
                            // validationSchema={AddGunSchema}
                            initialValues={this.state.bmi}
                            onSubmit={this.calculate_BMI}
                            enableReinitialize={true}
                        >
                            {({ errors, isSubmitting, setFieldValue }) => (
                                <Form enctype="multipart/form-data">
                                    <Modal.Body>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 mb-1">
                                                <div className="form-group">
                                                    <label>Height: </label>
                                                    <Field
                                                        type="text"
                                                        name="height"
                                                        className="form-control"
                                                        placeholder="Enter Height"
                                                    ></Field>
                                                    <ErrorMessage
                                                        name="height"
                                                        style={{
                                                            color: "red",
                                                        }}
                                                        component="div"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 mb-1">
                                                <div className="form-group">
                                                    <label>Weight : </label>
                                                    <Field
                                                        type="text"
                                                        name="weight"
                                                        className="form-control"
                                                        placeholder="Enter Weight"
                                                    ></Field>
                                                    <ErrorMessage
                                                        name="weight"
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
                                            Calculate BMI
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="col-md-12">
                        {this.showBMIResults(this.state.bmiVal)}
                    </div>
                </div>
            </div>
        );
    }
}

export default BMI;
