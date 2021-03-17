const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "ammunition_database",
});

app.post("/create", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const caliber = req.body.caliber;
    const rounds = req.body.rounds;
    const type = req.body.type;
    const origin = req.body.origin;
    const description = req.body.description;

    if (id === "" || id == null) {
        db.query(
            "INSERT INTO arsenal (name, caliber, rounds, type, origin, description) VALUES (?,?,?,?,?,?)",
            [name, caliber, rounds, type, origin, description],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Values Inserted");
                }
            }
        );
    } else {
        db.query(
            "UPDATE arsenal SET  name = ?, caliber = ?, rounds = ?, type = ?, origin = ?, description = ?  WHERE id = ?",
            [name, caliber, rounds, type, origin, description, id],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            }
        );
    }
});

app.get("/guns", (req, res) => {
    const type = req.params.type;
    db.query(
        "SELECT ar.id, ar.name, ar.caliber, ar.rounds, ar.origin, ar.description, gt.type, gt.id as gtid FROM arsenal ar join gun_type gt on gt.id=ar.type ORDER BY id desc",
        type,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.get("/type", (req, res) => {
    const type = req.params.type;
    db.query("SELECT * from gun_type ORDER BY id asc", type, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get("/count", (req, res) => {
    db.query(
        "SELECT gt.type ,count(ar.id) as count FROM `arsenal` ar right join gun_type gt on gt.id=ar.type group by gt.type",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM arsenal WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

let profileList_SP = `CALL GET_PROFILE_LIST`;

app.get("/profiles", (req, res) => {
    db.query(profileList_SP, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/register", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;
    const date_of_birth = req.body.date_of_birth;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const email = req.body.email;
    const marital_status = req.body.marital_status;
    const qualification = req.body.qualification;
    const zipcode = req.body.zipcode;
    const height = req.body.height;
    const weight = req.body.weight;
    const phone = req.body.phone;

    if (id === "" || id == null) {
        db.query(
            "INSERT INTO profile (name, age, gender, date_of_birth, address, city, state, email, marital_status, qualification, zipcode, height,weight,phone) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [
                name,
                age,
                gender,
                date_of_birth,
                address,
                city,
                state,
                email,
                marital_status,
                qualification,
                zipcode,
                height,
                weight,
                phone,
            ],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Profile Registered");
                }
            }
        );
    } else {
        db.query(
            "UPDATE profile SET name=? , age=?, gender=?, date_of_birth=?, address=?, city=?, state=?, email=?, marital_status=?, qualification=?, zipcode=?, height=?,weight=?,phone=? WHERE id=? ",
            [
                name,
                age,
                gender,
                date_of_birth,
                address,
                city,
                state,
                email,
                marital_status,
                qualification,
                zipcode,
                height,
                weight,
                phone,
                id,
            ],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Profile Updated");
                }
            }
        );
    }
});

app.get("/profile/:id", (req, res) => {
    const id = req.params.id;
    db.query(
        "SELECT pr.id, pr.name,pr.gender,pr.age,pr.date_of_birth,pr.address,pr.city,pr.state,pr.bmi,pr.email,pr.marital_status,pr.qualification,pr.zipcode,pr.created_on,pr.height,pr.weight,pr.phone FROM profile pr WHERE pr.id = ?",
        id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.post("/book_slot", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const date = req.body.date;
    const email = req.body.email;
    const phone = req.body.phone;
    const profile_id = req.body.profile_id;
    const arsenal_id = req.body.arsenal_id;

    if (id === "" || id == null) {
        db.query(
            "INSERT INTO book_slot (name, age, date, email, phone, profile_id,arsenal_id) VALUES (?,?,?,?,?,?,?)",
            [name, age, date, email, phone, profile_id, arsenal_id],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Booking Confirmed");
                }
            }
        );
    } else {
        db.query(
            "UPDATE book_slot SET  name = ?, age = ?, date = ?, email = ?, phone = ?, profile_id = ?, arsenal_id = ?  WHERE id = ?",
            [name, age, date, email, phone, profile_id, arsenal_id, id],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(result);
                }
            }
        );
    }
});

app.get("/bookings/:id", (req, res) => {
    const id = req.params.id;
    db.query(
        "SELECT bs.id, bs.name, bs.age, bs.date, bs.email, bs.phone, ar.name as gunName, ar.id as gunid FROM book_slot bs left join arsenal ar on ar.id=bs.arsenal_id WHERE bs.profile_id = ?",
        id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.delete("/delete-booking/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM book_slot WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/log-in", (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;

    db.query(
        "SELECT * FROM profile P WHERE P.name ='" +
            name +
            "' AND P.phone =" +
            phone,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({
                        message:
                            "Invalid credentials/ No records of this combination",
                    });
                }
            }
        }
    );
});

app.post("/calculate_bmi", (req, res) => {
    const height = req.body.height;
    const weight = req.body.weight;

    db.query("CALL BMI_STATUS(?,?)", [height, weight], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length > 0) {
                res.send(result[0]);
                console.log("ouotput",result[0])
            } else {
                res.send({
                    message: "Invalid combination",
                });
            }
        }
    });
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});
