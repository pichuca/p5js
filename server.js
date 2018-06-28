const express = require('express');
const app = express();
var serveStatic = require('serve-static');
var port = process.env.PORT || 3200;

app.use(serveStatic('./public', {'index': ['index.html', 'index.htm']}))

app.listen(port, () => console.log(`P5 js App listening on port ${port}!`));
