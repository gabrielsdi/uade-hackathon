const express = require('express');
const app = express()
let port = 3030;

app.use('/', express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
