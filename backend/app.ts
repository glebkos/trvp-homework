const express = require('express');
const routes = require('./routes/index.ts');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    express.json();
    next();
});

app.use('/api/v1', routes);

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});
