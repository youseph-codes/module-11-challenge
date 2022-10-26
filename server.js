var express = require('express');
var PORT = process.env.PORT || 1357;
var application = express();
var apiRoutes = require('./Develop/routes/apiRoutes');
var htmlROUTES = require('./Develop/routes/htmlRoutes');

application.use(express.urlencoded({ extended: true }));

application.use(express.json());

application.use(express.static('public'));

application.listen(PORT, () => {
});