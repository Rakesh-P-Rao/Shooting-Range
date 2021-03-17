import React, { Component } from "react";
import ReactTable from "react-table-6";
import { getAllProfileList } from "../functionalApiActions";
import RegisterForm from "../RegisterForm/RegisterForm";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
export class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profiles: [],
        };
    }

    componentDidMount() {
        this.getAllProfiles();
    }

    getAllProfiles = (type) => {
        getAllProfileList(type).then((response) => {
            this.setState({
                profiles: response[0],
            });
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
                Header: "Gender",
                accessor: "gender",
                filterable: "true",
                Cell: (row) => {
                    return <div>{row.value === 1 ? "Male" : "Female"}</div>;
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
                                <RegisterForm
                                    title={"Register to the Shooting Range"}
                                    update={false}
                                    updateList={this.getAllProfiles}
                                />
                                &nbsp;
                                <Link
                                    className="btn btn-info"
                                    to={PAGE_URLS.LOGIN}
                                >
                                    LOGIN
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ReactTable
                        columns={columns}
                        data={this.state.profiles}
                        minRows="1"
                        pageSize="50"
                    />
                </div>
            </>
        );
    }
}

export default Profile;
