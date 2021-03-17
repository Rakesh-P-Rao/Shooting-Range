import React from "react";
import { withRouter, Link } from "react-router-dom";
import carousel_1 from "../../../images/carousel_1.jpg";
import carousel_2 from "../../../images/carousel_2.jpg";
import carousel_3 from "../../../images/carousel_3.jpg";
import carousel_4 from "../../../images/carousel_4.jpg";
import carousel_5 from "../../../images/carousel_5.jpg";
import carousel_6 from "../../../images/carousel_6.jpg";
import carousel_7 from "../../../images/shooting_range_1.jpg";
import homeImage1 from "../../../images/homeImage1.jpeg";
import homeImage2 from "../../../images/homeImage2.webp";
import { PAGE_URLS } from "../../../Utils/Constants";
import { getGunTypeCount } from "../functionalApiActions";

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: [],
        };
    }
    componentDidMount() {
        getGunTypeCount().then((response) => {
            this.setState({
                count: response,
            });
        });
    }
    render() {
        return (
            <div>
                <div
                    id="carouselExampleIndicators"
                    class="carousel slide"
                    data-ride="carousel"
                >
                    <ol class="carousel-indicators">
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            class="active"
                        ></li>
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="1"
                        ></li>
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="2"
                        ></li>
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="3"
                        ></li>
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="4"
                        ></li>
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="5"
                        ></li>
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="6"
                        ></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img
                                class="d-block w-100 carousel-height"
                                src={carousel_7}
                                alt="Fifth slide"
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <Link
                                    className="text-light"
                                    to={PAGE_URLS.ALL_PROFILE_LIST}
                                >
                                    <h1 className="text-light">
                                        Register Your Profile...
                                    </h1>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item ">
                            <img
                                class="d-block w-100 carousel-height"
                                src={carousel_6}
                                alt="First slide"
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <Link
                                    className="text-light"
                                    to={PAGE_URLS.ALL_GUNS_LIST}
                                >
                                    <h1 className="text-light">
                                        View all the guns in the database...
                                    </h1>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                class="d-block w-100 carousel-height"
                                src={carousel_2}
                                alt="Second slide"
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className="text-light">
                                    Keep Count of the guns in the database...
                                </h1>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                class="d-block w-100 carousel-height"
                                src={carousel_3}
                                alt="Third slide"
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <Link
                                    className="text-light"
                                    to={PAGE_URLS.LOGIN}
                                >
                                    <h1 className="text-light">
                                        Login To Your Account...
                                    </h1>
                                </Link>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                class="d-block w-100 carousel-height"
                                src={carousel_4}
                                alt="Fourth slide"
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className="text-light">
                                    Edit and Update guns in the database...
                                </h1>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                class="d-block w-100 carousel-height"
                                src={carousel_5}
                                alt="Fifth slide"
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className="text-light">
                                    Delete any gun in the database...
                                </h1>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                class="d-block w-100 carousel-height"
                                src={carousel_1}
                                alt="Fifth slide"
                            />
                            <div class="carousel-caption d-none d-md-block">
                                <h1 className="text-light">
                                    Search any gun in the database by gun
                                    type...
                                </h1>
                            </div>
                        </div>
                    </div>
                    <a
                        class="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a
                        class="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div className="container">
                    <h4>Count of all types of Guns in the Database:</h4>
                    <div className="row">
                        {this.state.count.map((val) => (
                            <div className="col-4">
                                <div class="card text-white bg-dark mb-3 mt-3 ml-5 mr-5">
                                    <div class="card-body">
                                        <h5 class="card-title">{val.type}</h5>
                                        <p class="card-text">
                                            Count in DB: {val.count}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pl-5 pr-5">
                    <div class="card bg-dark text-white">
                        <img src={homeImage2} class="card-img " alt="..." />
                        <div class="card-img-overlay">
                            <h1 class="card-title">
                                View all the guns in the database...
                            </h1>
                            <Link
                                className="btn btn-outline-light btn-lg font-weight-bold"
                                to="/all-guns"
                            >
                                Go to AllGuns
                            </Link>
                        </div>
                    </div>
                    <div class="card bg-dark text-white">
                        <img src={homeImage1} class="card-img" alt="..." />
                        <div class="card-img-overlay">
                            <h1 class="card-title">Update or add guns...</h1>
                            <Link
                                className="btn btn-outline-light btn-lg font-weight-bold"
                                to="/all-guns"
                            >
                                Go to AddGun
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Carousel);
