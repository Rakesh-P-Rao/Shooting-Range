import React, { Component } from "react";
import { Button } from "react-bootstrap";
import {
    getAllGunsList,
    deleteGunFromList,
    getGunTypeList,
} from "../functionalApiActions";
import AddGunForm from "../AddGun/AddGunForm";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class AllGuns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allGunsList: [],
            gunTypeList: [],
        };
    }

    componentDidMount() {
        this.getAllListOfGuns();
        getGunTypeList().then((response) => {
            this.setState({
                gunTypeList: response,
            });
        });
    }

    getAllListOfGuns = (type) => {
        getAllGunsList(type).then((response) => {
            this.setState({
                allGunsList: response,
            });
        });
    };

    deleteGun = (id) => {
        deleteGunFromList(id).then((resp) => {
            this.getAllListOfGuns();
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
                Header: "Caliber/Catridge",
                accessor: "caliber",
                filterable: "true",
                Cell: (row) => {
                    return <div>{row.value}</div>;
                },
            },
            {
                Header: "Rounds",
                accessor: "rounds",
                filterable: "true",
                Cell: (row) => {
                    return <div>{row.value}</div>;
                },
            },
            {
                Header: "Type",
                accessor: "type",
                filterable: "true",
                Cell: (row) => {
                    return <div>{row.value}</div>;
                },
            },
            {
                Header: "Origin",
                accessor: "origin",
                filterable: "true",
                Cell: (row) => {
                    return <div>{row.value}</div>;
                },
            },
            {
                Header: "Description",
                accessor: "description",
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
                    console.log("original",original)
                    return (
                        <div className="row" style={{ marginLeft: "10px" }}>
                            <AddGunForm
                                val={true}
                                gun={original}
                                title={"Update Gun"}
                                updateList={this.getAllListOfGuns}
                                gunTypeList={this.state.gunTypeList}
                            />
                            &nbsp;&nbsp;
                            <Button
                                variant="danger"
                                onClick={() => this.deleteGun(original.id)}
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
                        <div className="col-11">
                            <div class="bs-example">
                                <div class="alert alert-dark alert-dismissible fade show">
                                    <strong>
                                        View, Create, Edit, Delete the gun of ur
                                        choice from the database!
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <AddGunForm
                                val={false}
                                title={"Add Gun"}
                                updateList={this.getAllListOfGuns}
                                gunTypeList={this.state.gunTypeList}
                            />
                        </div>
                    </div>
                    <ReactTable
                        columns={columns}
                        data={this.state.allGunsList}
                        minRows="1"
                        pageSize="50"
                    />
                </div>
            </>
        );
    }
}

export default AllGuns;
