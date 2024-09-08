import express from 'express';

const app = express();

// Advance routing
// String pattern path
app.get('/ab?cd', (req, res) => {
    res.send("<h1>If the user hit (acd) or (abcd) then this will run.</h1>")
});

// Regex
app.get(/x/, (req, res) => {
    res.send("<h1>If the path includes (x) then this will run.</h1>")
});

app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
    res.send("<h1>If the path includes /users/1234 then this will run.</h1>")
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
