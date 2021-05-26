import { app, routes } from "./app";
import { CommonRoutes } from "./common/routes/common.routes";

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
    routes.forEach((route: CommonRoutes) => {
        console.log(`Routes configured for  ${route.getName()}`)
    })
})
