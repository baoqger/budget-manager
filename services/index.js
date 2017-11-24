require('module-alias/register');
const http = require('http'),
      // "@BudgetManagerAPI": "./services/BudgetManagerAPI/config/app.js",
      BudgetManagerAPI = require('@BudgetManagerAPI');
      BudgetManagerServer = http.Server(BudgetManagerAPI);
      // BudgetManagerServer = http.createServer(BudgetManagerAPI);
      BudgetManagerPORT = process.env.PORT || 3001,
      LOCAL = '0.0.0.0';


BudgetManagerServer.listen(BudgetManagerPORT, LOCAL, () => console.log(`BudgetManagerAPI running on ${BudgetManagerPORT}`));