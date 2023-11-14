const express = require("express");
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

// app.get("/index", (req, res) => {
//     res.sendFile(path.join(__dirname, '/views/index.html'));
// });



// const port = 3010;

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Servidor habilitado http://localhost:${port}`);
});
