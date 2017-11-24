module.exports = {
  secret: 'budgetsecret', // the secret used to generate the JWT token
  session: {session: false}, // the second parameter of passport.authenticate() function
  database: 'mongodb://127.0.0.1:27017/budgetmanager',
}