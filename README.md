# budget-manager
vue.js + node.js web app

这是一个javascript的全栈项目,参考网上的tutorial开发(https://codeburst.io/building-a-budget-manager-with-vue-js-and-node-js-part-i-f3d7311822a8)。
原始项目有一些问题，可能会跑不通，在自己的项目里把这些东西都修复了。

技术栈: vue2.x + node.js(express) + mongodb + vuetify + passport.js

1. client端的SPA是vue.js开发的；
2. UI使用了vuetify组件库，个人感觉相比iview，vuetify更适合做前台产品，设计感更好些;
3. 后端REST API是Express（4.x）框架开发的;
4. 数据层用的mongodb，以及它的ORM工具mongoose
5. 这个项目还添加了user authentication(用户身份认证)的部分，使用的是passport.js。具体使用的是JWT(json-web-token)的策略
