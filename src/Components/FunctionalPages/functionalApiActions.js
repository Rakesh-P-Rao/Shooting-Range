import { SERVER_ACTIONS } from "../../Utils/Constants";
import HttpRequest from "../../Utils/HttpRequest";

export function getAllGunsList() {
    return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_GUNS}`, "GET")
        .requestWithAuthentication()
        .then(
            (response) => {
                return Promise.resolve(response.data);
            },
            (error) => {
                return Promise.reject(error);
            }
        );
}

export function saveGunToList(data, formAction) {
    return new HttpRequest(`${SERVER_ACTIONS.SAVE_GUN}`, "POST", data)
        .requestWithAuthentication()
        .then(
            (response) => {
                alert("Gun Added/Updated To DataBase Successfully !");
                return Promise.resolve(response.data);
            },
            (error) => {
                alert("Error in Adding Gun To DataBase !");
                return Promise.reject(error);
            }
        );
}

export function deleteGunFromList(id) {
    return new HttpRequest(`${SERVER_ACTIONS.DELETE_GUN}/${id}`, "DELETE", {})
        .requestWithAuthentication()
        .then(
            (response) => {
                alert("Gun is Deleted from DataBase Successfully !");
                return Promise.resolve(response.data);
            },
            (error) => {
                alert("Error in Deleting Gun From DataBase !");
                return Promise.reject(error);
            }
        );
}

export function getGunTypeList() {
    return new HttpRequest(`${SERVER_ACTIONS.GET_GUNS_TYPES}`, "GET")
        .requestWithAuthentication()
        .then(
            (response) => {
                return Promise.resolve(response.data);
            },
            (error) => {
                return Promise.reject(error);
            }
        );
}
export function getAllGunNames() {
    return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_GUNS}`, "GET")
        .requestWithAuthentication()
        .then(
            (response) => {
                return Promise.resolve(response.data);
            },
            (error) => {
                return Promise.reject(error);
            }
        );
}

export function getGunTypeCount() {
    return new HttpRequest(`${SERVER_ACTIONS.GET_COUNT}`, "GET")
        .requestWithAuthentication()
        .then(
            (response) => {
                return Promise.resolve(response.data);
            },
            (error) => {
                return Promise.reject(error);
            }
        );
}

export function getAllProfileList() {
    return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_PROFILES}`, "GET")
        .requestWithAuthentication()
        .then(
            (response) => {
                return Promise.resolve(response.data);
            },
            (error) => {
                return Promise.reject(error);
            }
        );
}

export function registerProfile(data, formAction) {
    return new HttpRequest(`${SERVER_ACTIONS.REGISTER_PROFILE}`, "POST", data)
        .requestWithAuthentication()
        .then(
            (response) => {
                alert("Profile Updated To DataBase Successfully !");
                return Promise.resolve(response.data);
            },
            (error) => {
                alert("Error in Updating Profile To DataBase !");
                return Promise.reject(error);
            }
        );
}

export function getMyProfile(id) {
    return new HttpRequest(`${SERVER_ACTIONS.GET_MY_PROFILE}/${id}`, "GET")
        .requestWithAuthentication()
        .then(
            (response) => {
                return Promise.resolve(response.data);
            },
            (error) => {
                return Promise.reject(error);
            }
        );
}

export function bookSlot(data, formAction) {
    return new HttpRequest(`${SERVER_ACTIONS.BOOK_A_SLOT}`, "POST", data)
        .requestWithAuthentication()
        .then(
            (response) => {
                alert("Booking Confirmed!");
                return Promise.resolve(response.data);
            },
            (error) => {
                alert("Error in Booking Slot!");
                return Promise.reject(error);
            }
        );
}

export function deleteBookingFromList(id) {
    return new HttpRequest(
        `${SERVER_ACTIONS.DELETE_BOOKING}/${id}`,
        "DELETE",
        {}
    )
        .requestWithAuthentication()
        .then(
            (response) => {
                alert("Booking is Deleted from DataBase Successfully !");
                return Promise.resolve(response.data);
            },
            (error) => {
                alert("Error in Deleting Booking From DataBase !");
                return Promise.reject(error);
            }
        );
}

export function getAllMyBookings(id) {
    return new HttpRequest(`${SERVER_ACTIONS.GET_MY_BOOKINGS}/${id}`, "GET")
        .requestWithAuthentication()
        .then(
            (response) => {
                return Promise.resolve(response.data);
            },
            (error) => {
                return Promise.reject(error);
            }
        );
}

export function logInToProfile(data, formAction) {
    return new HttpRequest(`${SERVER_ACTIONS.LOG_IN}`, "POST", data)
        .requestWithAuthentication()
        .then(
            (response) => {
                if (response.data.message) {
                    alert(response.data.message);
                } else {
                    alert("Logged in successfully");
                    return Promise.resolve(response.data[0]);
                }
            },
            (error) => {
                alert("Error in Logging in");
                return Promise.reject(error);
            }
        );
}

export function calculate_BMI(data, formAction) {
    return new HttpRequest(`${SERVER_ACTIONS.CALCULATE_BMI}`, "POST", data)
        .requestWithAuthentication()
        .then(
            (response) => {
                if (response.data.message) {
                    alert(response.data.message);
                } else {
                    alert("BMI Calculated successfully");
                    return Promise.resolve(response.data[0]);
                }
            },
            (error) => {
                alert("Error in calculating BMI");
                return Promise.reject(error);
            }
        );
}
