import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { bookSlot } from "../functionalApiActions";

export class BookSlot extends Component {
    constructor(props) {
        super(props);

        let bookSlot = {
            id: props.update ? props.bookSlot.id : "",
            name: props.update ? props.bookSlot.name : "",
            age: props.update ? props.bookSlot.age : "",
            date: props.update ? props.bookSlot.date : "",
            email: props.update ? props.bookSlot.email : "",
            phone: props.update ? props.bookSlot.phone : "",
            profile_id: props.update ? this.props.profile : this.props.profile,
            arsenal_id: props.update ? props.bookSlot.gunid : "",
        };

        this.state = {
            show: false,
            bookSlot: bookSlot,
            gunNames: this.props.gunNames,
        };
    }

    bookASlot = (data, formAction) => {
        formAction.setSubmitting(true);
        bookSlot(data, formAction).then(
            (response) => {
                formAction.setSubmitting(false);
                // this.props.updateList();
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
        console.log("guns", this.state.bookSlot);
        return (
            <>
                <div>
                    {!this.props.update ? (
                        <Button variant="danger" onClick={this.handleShow}>
                            Book Your Slot Here
                        </Button>
                    ) : (
                        <Button variant="primary" onClick={this.handleShow}>
                            Edit
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
                                <Modal.Title>{this.props.title}</Modal.Title>
                            )}
                        </Modal.Header>
                        <Formik
                            // validationSchema={AddGunSchema}
                            initialValues={this.state.bookSlot}
                            onSubmit={this.bookASlot}
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
                                                    <label>Choose Date: </label>
                                                    <Field
                                                        type="date"
                                                        name="date"
                                                        className="form-control"
                                                        placeholder="Enter Booking Date "
                                                    ></Field>
                                                    <ErrorMessage
                                                        name="date"
                                                        style={{ color: "red" }}
                                                        component="div"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                                                <div className="form-group">
                                                    <label>Email: </label>
                                                    <small>
                                                        (We will mail you to
                                                        this mail in case of any
                                                        queries)
                                                    </small>
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
                                                    <label>Phone: </label>
                                                    <small>
                                                        We will contact you in
                                                        case of any queries with
                                                        this number
                                                    </small>
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
                                                <div className="form-group">
                                                    <label>
                                                        Chooos a gun (optional):
                                                    </label>
                                                    <select
                                                        defaultValue={
                                                            this.state.bookSlot
                                                                .arsenal_id
                                                        }
                                                        className="form-control"
                                                        onChange={(e) => {
                                                            setFieldValue(
                                                                "arsenal_id",
                                                                e.target.value
                                                            );
                                                        }}
                                                    >
                                                        <option value="">
                                                            Select Type
                                                        </option>
                                                        {this.props.gunNames.map(
                                                            (names) => (
                                                                <option
                                                                    key={
                                                                        names.id
                                                                    }
                                                                    value={
                                                                        names.id
                                                                    }
                                                                >
                                                                    {names.name}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                    <ErrorMessage
                                                        name="arsenal_id"
                                                        style={{ color: "red" }}
                                                        component="div"
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group" hidden>
                                                <Field
                                                    name="id"
                                                    value={
                                                        this.state.bookSlot
                                                            .profile_id
                                                    }
                                                ></Field>
                                            </div>
                                            <div className="form-group" hidden>
                                                <Field
                                                    name="id"
                                                    value={
                                                        this.state.bookSlot.id
                                                    }
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
                                            Confirm Booking
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            )}
                        </Formik>
                    </Modal>
                </div>
            </>
        );
    }
}

export default BookSlot;
