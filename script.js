const express = require('express');
const app = exress();
app.get('/', (request, response) => {
    response.json({fisrt: "hi" });
});
app.listen(4555, () => {
    console.log("server started");
});
