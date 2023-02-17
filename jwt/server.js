const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')


app.use(cookieParser());
app.get("/", (req, res) => {

    let jwtSecretKey = "brufen400XR";
    let data = {
        "username": "gigabyte666",
        "password": "same-as-secret-key",

    }

    const token = jwt.sign(data, jwtSecretKey, { noTimestamp: true });
    const sol = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJicnVmZW40MDBYUiJ9.0wfeiBvyjNTEYsHWUFDnu_quzDVOSakwaKpLR3VrMLc"


    if (!req.cookies.login) {
        res.cookie("login", token);


    }
    else if (req.cookies.login == sol) {
        res.send('\'ello Sire! JBLWNYN{c4k0r_dm00b5_p3t5!?!?q4jg3_p3_15_5i1v3vx4s!!}');
    }

    res.send('\'ello, mate! I see you ain\'t admen. No going any further.')




});

app.listen(80,
    console.log("server running")
)