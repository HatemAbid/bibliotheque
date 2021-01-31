
const express = require('express');

const app = express();

app.use(express.static('./dist/bibliotheque-angular'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/bibliotheque-angular/'}),
);

app.listen(process.env.PORT || 8080);
