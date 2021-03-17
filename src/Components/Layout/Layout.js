import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import HeaderComponent from "../UI/Header/HeaderComponent";
import FooterComponent from "../UI/Footer/FooterComponent";
import AllGuns from '../FunctionalPages/AllGuns/AllGuns';
import Carousel from '../FunctionalPages/Carousel/Carousel';
import PageNotFoundComponent from '../UI/PageNotFound/PageNotFound';
import { PAGE_URLS } from '../../Utils/Constants';
import Profile from '../FunctionalPages/Profile/Profile';
import Login from '../FunctionalPages/Login/Login';
import MyProfile from '../FunctionalPages/Profile/MyProfile';
import BookSlot from '../FunctionalPages/BookSlot/BookSlot';
import ViewBookings from '../FunctionalPages/BookSlot/ViewBookings';
import BMI from '../FunctionalPages/BMI/BMI';

export class Layout extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <header>
                        <HeaderComponent />
                    </header>

                    <main>
                        <Switch>
                            <Route path="/" exact component={Carousel} />
                            <Route
                                path={PAGE_URLS.ALL_PROFILE_LIST}
                                exact
                                component={Profile}
                            />
                            <Route
                                path={PAGE_URLS.LOGIN}
                                exact
                                component={Login}
                            />
                            <Route
                                path={PAGE_URLS.MY_PROFILE}
                                exact
                                component={MyProfile}
                            />
                            <Route
                                path={PAGE_URLS.ALL_GUNS_LIST}
                                exact
                                component={AllGuns}
                            />
                            <Route
                                path={PAGE_URLS.VIEW_MY_BOOKINGS}
                                exact
                                component={ViewBookings}
                            />
                            <Route
                                path={PAGE_URLS.BOOK_SLOT}
                                exact
                                component={BookSlot}
                            />
                            <Route
                                path={PAGE_URLS.CHECK_BMI}
                                exact
                                component={BMI}
                            />
                            <Route
                                path="**"
                                component={PageNotFoundComponent}
                            />
                        </Switch>
                    </main>

                    <footer>
                        <FooterComponent />
                    </footer>
                </BrowserRouter>
            </div>
        );
    }
}

export default withRouter(Layout);
