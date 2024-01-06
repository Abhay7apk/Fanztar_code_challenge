const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// In-memory storage for orders
let ordersInMemory = [];

app.get("", (req, res) => {
    res.send("Home Page");
});

app.post("/order", async (req, res) => {
    try {
        // read local saved data
        var data = fs.readFileSync('./config.json');
        var saved_data = JSON.parse(data);

        var total_price = 0;
        var missing_part = "Order is Invalid\nMissing Part is : ";
        var status = false;

        // all these value received via query parameter 
        var screen = req.query.screen;
        var os = req.query.os;
        var camera = req.query.camera;
        var port = req.query.port;
        var body = req.query.body;

        // condition for screen
        if (screen == "A" || screen == "B" || screen == "C") {
            total_price += saved_data[screen][0];
        } else {
            missing_part += "Screen";
            status = true;
        }

        // condition for camera
        if (camera == "E" || camera == "D") {
            total_price += saved_data[camera][0];
        } else {
            missing_part += " Camera";
            status = true;
        }

        // condition for port
        if (port == "F" || port == "G" || port == "H") {
            total_price += saved_data[port][0];
        } else {
            missing_part += " Port";
            status = true;
        }

        // condition for OS
        if (os == "I" || os == "J") {
            total_price += saved_data[os][0];
        } else {
            missing_part += " OS";
            status = true;
        }

        // condition for body
        if (body == "K" || body == "L") {
            total_price += saved_data[body][0];
        } else {
            missing_part += " Body";
            status = true;
        }

        if (status) {
            res.send(missing_part);
        } else {
            const user_order = {
                order_id: `order_${ordersInMemory.length + 1}`, // Generate a unique ID for the order
                total: total_price,
                part: [saved_data[screen][1], saved_data[camera][1], saved_data[port][1], saved_data[os][1], saved_data[body][1]]
            };
            // Store the order in memory
            ordersInMemory.push(user_order);
            res.status(201).send(user_order);
        }

    } catch (err) {
        res.send(err);
    }
});

// Endpoint to get all orders stored in memory
app.get("/orders", (req, res) => {
    res.json(ordersInMemory);
});

app.listen(8004, () => {
    console.log("Server is running on the port 8004");
});