// External Packages
const express = require('express');
const path = require('path');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Project Modules
const schema = require('../data/schema');

const PORT = 3000;

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// static file-serving middleware
const mypath = path.join(__dirname, 'public');
console.log('MY PATH: ', mypath);
// app.use(express.static(__dirname, 'public'));
app.use(express.static(path.join(__dirname, '..', 'public')));

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.listen(PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${PORT}/graphiql`
));
