import React from "react";
import { Link, withRouter } from "react-router-dom";
import Logo from "../../../images/default.webp";
import {PAGE_URLS} from "../../../Utils/Constants";

function HeaderComponent() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link class="navbar-brand" to="/">
                <img src={Logo} width="50" height="50" alt="" />
            </Link>
            <Link class="navbar-brand" to="/">
                Shooting Range
            </Link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">
                            Home <span class="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={PAGE_URLS.ALL_PROFILE_LIST}>
                            Profiles
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={PAGE_URLS.ALL_GUNS_LIST}>
                            Arsenal
                        </Link>
                    </li>
                </ul>

                <div class="nav-item float-right">
                    <Link class="btn btn-warning " to={PAGE_URLS.CHECK_BMI}>
                        Check your BMI !!
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(HeaderComponent);
