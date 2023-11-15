const express = require("express");
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});


app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/registro.html'))
})
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
const port = process.env.PORT || 3070
app.listen(port, () => {
    console.log(`Servidor habilitado http://localhost:${port}`);
});