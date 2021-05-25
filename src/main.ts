import { app, routes } from "./app";
import { CommonRoutes } from "./common/routes/common.routes";

app.listen(3000, () => {
    console.log(`Server running at http://localhost:${3000}`)
    routes.forEach((route: CommonRoutes) => {
        console.log(`Routes configured for  ${route.getName()}`)
    })
})
