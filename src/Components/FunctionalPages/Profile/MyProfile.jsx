import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
    getAllGunNames,
    getMyProfile,
    registerProfile,
} from "../functionalApiActions";
import BookSlot from "../BookSlot/BookSlot";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

export class MyProfile extends Component {
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
            profile: profile,
            userId: this.props.match.params,
            gunNames: [],
        };
    }

    componentDidMount() {
        this.getProfileById();
        getAllGunNames().then((response) => {
            this.setState({
                gunNames: response,
            });
        });
    }

    getProfileById = () => {
        getMyProfile(this.state.userId.id).then((val) => {
            let { profile } = this.state;
            profile.id = val[0].id;
            profile.name = val[0].name;
            profile.gender = val[0].gender;
            profile.age = val[0].age;
            profile.email = val[0].email;
            profile.address = val[0].address;
            profile.city = val[0].city;
            profile.phone = val[0].phone;
            profile.date_of_birth = val[0].date_of_birth;
            profile.height = val[0].height;
            profile.weight = val[0].weight;
            profile.marital_status = val[0].marital_status;
            profile.qualification = val[0].qualification;
            profile.state = val[0].state;
            profile.zipcode = val[0].zipcode;
            profile.bmi = val[0].bmi;
            this.setState({
                profile,
            });
        });
    };
    register = (data, formAction) => {
        formAction.setSubmitting(true);
        registerProfile(data, formAction).then(
            (response) => {
                formAction.setSubmitting(false);
                this.getProfileById();
                window.location.reload();
            },
            (error) => {
                formAction.setSubmitting(false);
            }
        );
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
        console.log("dfg", this.state.profile.id);
        return (
            <>
                <div style={{ marginTop: "90px" }}>
                    <div className="row">
                        <div className="col-10">
                            <div class="alert alert-dark alert-dismissible show">
                                <h4>
                                    <strong>
                                        View your complete personal information
                                        and Book Your Slot Here -
                                    </strong>
                                </h4>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row">
                                {/* <BookSlot
                                    title={"Book a slot in the Shooting Range"}
                                    gunNames={this.state.gunNames}
                                    update={false}
                                    updateList={this.getAllOfMyBookings}
                                    profile={this.state.profile.id}
                                />
                                &nbsp; */}
                                <Link
                                    className="btn btn-info"
                                    to={PAGE_URLS.VIEW_MY_BOOKINGS.replace(
                                        ":id",
                                        this.state.profile.id
                                    )}
                                >
                                    View My Bookings
                                </Link>
                            </div>
                        </div>
                    </div>
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
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>Age : </label>
                                                <Field
                                                    type="text"
                                                    name="age"
                                                    className="form-control"
                                                    placeholder="Enter Age"
                                                    readOnly
                                                ></Field>
                                                <ErrorMessage
                                                    name="age"
                                                    style={{ color: "red" }}
                                                    component="div"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            <div className="form-group">
                                                <label>Gender: </label>
                                                <select
                                                    value={
                                                        this.state.profile
                                                            .gender
                                                    }
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
                                                    data-date-format="dd-mm-yyyy"
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
                                                    value={
                                                        this.state.profile
                                                            .marital_status
                                                    }
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

                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                            {this.showBMIResults(
                                                this.state.profile.bmi
                                            )}
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
                </div>
                <br />
                <br />
                <br />
            </>
        );
    }
}

export default MyProfile;
