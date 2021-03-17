import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import {
    getAllMyBookings,
    deleteBookingFromList,
    getAllGunNames,
} from "../functionalApiActions";
import BookSlot from "./BookSlot";
import { Button } from "react-bootstrap";

export class ViewBookings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookings: [],
            gunNames: [],
            profile: this.props.match.params,
        };
    }

    componentDidMount() {
        this.getAllOfMyBookings();
        getAllGunNames().then((response) => {
            this.setState({
                gunNames: response,
            });
        });
    }

    getAllOfMyBookings = (id) => {
        getAllMyBookings(this.state.profile.id).then((response) => {
            this.setState({
                bookings: response,
            });
        });
    };

    deleteBooking = (id) => {
        deleteBookingFromList(id).then((resp) => {
            this.getAllOfMyBookings();
        });
    };

    render() {
        let columns = [
            {
                Header: "Sr.No.",
                id: "row",
                maxWidth: 60,
                Cell: (row) => {
                    return (
                        <center>
                            <div>{row.index + 1}</div>
                        </center>
                    );
                },
            },
            {
                Header: "Name",
                accessor: "name",
                filterable: "true",
                Cell: (row) => {
                    return <div>{row.value}</div>;
                },
            },
            {
                Header: "Age",
                accessor: "age",
                filterable: "true",
                Cell: (row) => {
                    return <div>{row.value}</div>;
                },
            },
            {
                Header: "Booking Date",
                accessor: "date",
                filterable: "true",
                Cell: (row) => {
                    return <div>{row.value}</div>;
                },
            },
            {
                Header: "Email",
                accessor: "email",
                filterable: "true",
                Cell: (row) => {
                    return <div>{row.value}</div>;
                },
            },
            {
                Header: "Phone",
                accessor: "phone",
                filterable: "true",
                Cell: (row) => {
                    return (
                        <div>
                            <span title={row.value}>{row.value}</span>
                        </div>
                    );
                },
            },
            {
                Header: "Selected Gun",
                accessor: "gunName",
                filterable: "true",
                Cell: (row) => {
                    return (
                        <div>
                            <span title={row.value}>{row.value}</span>
                        </div>
                    );
                },
            },
            {
                Header: "Actions",
                accessor: "actions",
                Cell: ({ original }) => {
                    return (
                        <div className="row" style={{ marginLeft: "10px" }}>
                            <BookSlot
                                update={true}
                                gun={original}
                                title={"Update Booking"}
                                updateList={this.getAllOfMyBookings}
                                gunNames={this.state.gunNames}
                                bookSlot={original}
                                profile={this.state.profile.id}
                            />
                            &nbsp;&nbsp;
                            <Button
                                variant="danger"
                                onClick={() => this.deleteBooking(original.id)}
                            >
                                Delete
                            </Button>
                        </div>
                    );
                },
            },
        ];
        return (
            <>
                <div style={{ marginTop: "90px" }}>
                    <div className="row">
                        <div className="col-10">
                            <div class="bs-example">
                                <div class="alert alert-dark alert-dismissible fade show">
                                    <strong>
                                        View, Create, Edit, Delete the gun of ur
                                        choice from the database!
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="row">
                                &nbsp;
                                <BookSlot
                                    title={"Book a slot in the Shooting Range"}
                                    update={false}
                                    updateList={this.getAllOfMyBookings}
                                    gunNames={this.state.gunNames}
                                    profile={this.state.profile.id}
                                />
                            </div>
                        </div>
                    </div>
                    <ReactTable
                        columns={columns}
                        data={this.state.bookings}
                        minRows="1"
                        pageSize="50"
                    />
                </div>
            </>
        );
    }
}

export default ViewBookings;
