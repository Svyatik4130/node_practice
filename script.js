const express = require('express');
const users = require("./users/routes.js")
const app = express();
app.use("/users", users);
app.get('/', (request, response) => {
    response.send({ users });
});
app.listen(4555, () => {
    console.log("server started");
});
