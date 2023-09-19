const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('halo dek')
})

const bodyPs = require('body-parser');
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());

const mhsrouter = require("./routes/mahasiswa.js");
app.use("/api/mhs", mhsrouter);

app.listen(port, () => {
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
})