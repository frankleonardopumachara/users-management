"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.app.listen(3000, () => {
    console.log(`Server running at http://localhost:${3000}`);
    app_1.routes.forEach((route) => {
        console.log(`Routes configured for  ${route.getName()}`);
    });
});
