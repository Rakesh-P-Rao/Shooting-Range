import React from "react";
import {  withRouter } from "react-router-dom";

function FooterComponent() {
    return (
        <div class="card-footer bg-dark text-light fixed-bottom">
            <p>Ammunition Database developed by RAKESH_P_RAO </p>
        </div>
    );
}

export default withRouter(FooterComponent);
