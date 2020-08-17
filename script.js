const circle = require('./circles.js');
const express = require('express');
const app = exress();
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
app.listen(4555, () => {
    console.log("server started");
});
