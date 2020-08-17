const { find } = require("lodash");
const express = require("express");
const { users } =  require('./users-mock.js');
const router = express.Router();
router.get("/", (req, res) => {
    res.json(users);
});
router.get("/:id", (req, res) => {
    console.log(req);
})

module.exports = {
    router
}