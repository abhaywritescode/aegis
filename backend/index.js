const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));
app.use('/auth-status', require('./routes/auth-status'));
app.use('/account', require('./routes/account'));

app.listen(port, (req, res) => {
    console.log(`App is listening at ${port}.`);
});