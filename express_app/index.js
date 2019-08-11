const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(
    cors({
        methods: ["PUT, GET, POST, DELETE, OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
        credentials: true
    })
);
// this will accept all the calls to root URL http://localhost:8080/
// It will render the index.html available in the Project root directory as a Response
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});


app.listen(8080, () => {
    console.log('Listening on port 8080');
});