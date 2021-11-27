const express = require('express');
const app = express('helmet');
app.use(helmet({
  frameguard: false
}))
const express = require('express');
const app = express('helmet');
app.use(helmet.xssFilter())
app.use(helmet.frameguard())
app.disable("x-powered-by")

app.use(
  helmet({
    hidePoweredBy: true,
})
);













































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
