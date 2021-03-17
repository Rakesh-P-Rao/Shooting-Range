import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerProfile } from "../functionalApiActions";
// import RegisterSchema from "./RegisterSchema";

export class RegisterForm extends Component {
    constructor(props) {
        super(props);

        let profile = {
            id: "",
            name: "",
            age: "",
            gender: "",
            date_of_birth: "",
            address: "",
            city: "",
            state: "",
            email: "",
            marital_status: "",
            qualification: "",
            zipcode: "",
            height: "",
            weight: "",
            phone: "",
        };
        this.state = {
            show: false,
            profile: profile,
            gunTypeList: this.props.gunTypeList,
        };
    }

    register = (data, formAction) => {
        debugger;
        formAction.setSubmitting(true);
        registerProfile(data, formAction).then(
            (response) => {
                formAction.setSubmitting(false);
                this.props.updateList();
                this.handleClose();
                window.location.reload();
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
            <div>
                {!this.props.update ? (
                    <Button variant="primary" onClick={this.handleShow}>
                        REGISTER
                    </Button>
                ) : (
                    <Button variant="primary" onClick={this.handleShow}>
                        UPDATE PROFILE
                    </Button>
                )}

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    size="xl"
                >
                    <Modal.Header closeButton>
                        {!this.props.update ? (
                            <Modal.Title>{this.props.title}</Modal.Title>
                        ) : (
                            <Modal.Title>
                                {this.props.title} : {this.props.profile.name}
                            </Modal.Title>
                        )}
                    </Modal.Header>
                    <Formik
                        // validationSchema={AddGunSchema}
                        initialValues={this.state.profile}
                        onSubmit={this.register}
                        enableReinitialize={true}
                    >
                        {({ errors, isSubmitting, setFieldValue }) => (
                            <Form enctype="multipart/form-data">
                                <Modal.Body>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 mb-1">
                                            <div className="form-group">
                                                <label>Name: </label>
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    placeholder="Enter Name"
                                                ></Field>
                                                <ErrorMessage
                                                    name="name"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        {/* <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>Age : </label>
                                                <Field
                                                    type="text"
                                                    name="age"
                                                    className="form-control"
                                                    placeholder="Enter Age"
                                                ></Field>
                                                <ErrorMessage
                                                    name="age"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div> */}
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>Gender: </label>
                                                <select
                                                    // defaultValue={
                                                    //     this.state.profile.gtid
                                                    // }
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        setFieldValue(
                                                            "gender",
                                                            e.target.value
                                                        );
                                                    }}
                                                >
                                                    <option value="">
                                                        Select Gender
                                                    </option>
                                                    <option value="1">
                                                        Male
                                                    </option>
                                                    <option value="2">
                                                        Female
                                                    </option>
                                                    <option value="3">
                                                        Other
                                                    </option>
                                                </select>
                                                <ErrorMessage
                                                    name="gender"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>Date Of Birth: </label>
                                                <Field
                                                    type="date"
                                                    name="date_of_birth"
                                                    className="form-control"
                                                    placeholder="Enter Date of Birth"
                                                ></Field>
                                                <ErrorMessage
                                                    name="date_of_birth"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>Address: </label>
                                                <Field
                                                    type="text"
                                                    name="address"
                                                    className="form-control"
                                                    placeholder="Enter Address"
                                                ></Field>
                                                <ErrorMessage
                                                    name="address"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>City: </label>
                                                <Field
                                                    type="text"
                                                    name="city"
                                                    className="form-control"
                                                    placeholder="Enter City"
                                                ></Field>
                                                <ErrorMessage
                                                    name="city"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>State: </label>
                                                <Field
                                                    type="text"
                                                    name="state"
                                                    className="form-control"
                                                    placeholder="Enter State"
                                                ></Field>
                                                <ErrorMessage
                                                    name="state"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>Email: </label>
                                                <Field
                                                    type="text"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                ></Field>
                                                <ErrorMessage
                                                    name="email"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>Marital Status: </label>
                                                <select
                                                    // defaultValue={
                                                    //     this.state.profile.gtid
                                                    // }
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        setFieldValue(
                                                            "marital_status",
                                                            e.target.value
                                                        );
                                                    }}
                                                >
                                                    <option value="">
                                                        Select Status
                                                    </option>
                                                    <option value="1">
                                                        Married
                                                    </option>
                                                    <option value="2">
                                                        Unmarried
                                                    </option>
                                                </select>
                                                <ErrorMessage
                                                    name="marital_status"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>Qualification: </label>
                                                <Field
                                                    type="text"
                                                    name="qualification"
                                                    className="form-control"
                                                    placeholder="Enter Qualification"
                                                ></Field>
                                                <ErrorMessage
                                                    name="qualiication"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>Zipcode: </label>
                                                <Field
                                                    type="text"
                                                    name="zipcode"
                                                    className="form-control"
                                                    placeholder="Enter Zipcode"
                                                ></Field>
                                                <ErrorMessage
                                                    name="zipcode"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
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
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>Weight: </label>
                                                <Field
                                                    type="text"
                                                    name="weight"
                                                    className="form-control"
                                                    placeholder="Enter Weight"
                                                ></Field>
                                                <ErrorMessage
                                                    name="weight"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>Phone: </label>
                                                <Field
                                                    type="text"
                                                    name="phone"
                                                    className="form-control"
                                                    placeholder="Enter Phone"
                                                ></Field>
                                                <ErrorMessage
                                                    name="phone"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group" hidden>
                                            <Field
                                                name="id"
                                                value={this.state.profile.id}
                                            ></Field>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={this.handleClose}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        variant={
                                            isSubmitting
                                                ? "secondary"
                                                : "primary"
                                        }
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal>
            </div>
        );
    }
}

export default RegisterForm;
