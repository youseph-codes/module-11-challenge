const express = require('express');

const PORT = process.env.PORT || 1357;
const application = express();

const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

application.use(express.urlencoded({ extended: true }));

application.use(express.json());

application.use(express.static('public'));

application.use(apiRoutes);
application.use('/', htmlRoutes)

application.listen(PORT, () => {
    console.log(`API server new on port ${PORT}!`);
});