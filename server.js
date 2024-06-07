const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/signup', (req, res) => {
    const { username, password,email } = req.body;
    console.log(`Received signup data: Username - ${username}, Email - ${email}, Password - ${password}`);
    res.status(200).send('Signup data received');
});

app.post('/preferences', (req, res) => {
    const { genres } = req.body;
    console.log(`Received preferences: ${genres}`);
    res.status(200).send('Preferences data received');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
