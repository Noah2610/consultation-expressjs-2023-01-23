const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

function readDataFile() {
    const content = fs.readFileSync("./data.json", "utf8");
    const data = JSON.parse(content);
    return data;
}

function writeDataFile(data) {
    const content = JSON.stringify(data);
    fs.writeFileSync("./data.json", content, "utf8");
}

app.post("/pizza/order", (req, res) => {
    const pizza = req.body.pizza;

    const data = readDataFile();
    data.orders.push(pizza);
    writeDataFile(data);

    const message = "Ordered " + pizza;

    console.log(message);
    res.send(message);
});

app.get("/auth", (req, res) => {
    res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {
    res.send("DASHBOARD");
});

app.listen(8090, "0.0.0.0");
