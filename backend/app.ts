const express = require('express');
const routes = require('./routes/index.ts');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/api/v1', routes);

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});
