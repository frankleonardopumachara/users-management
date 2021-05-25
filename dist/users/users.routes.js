"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_1 = require("../common/routes/common.routes");
const user_controller_1 = __importDefault(require("./controllers/user.controller"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
class UsersRoutes extends common_routes_1.CommonRoutes {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app.route('/users')
            .get(user_controller_1.default.listUsers)
            .post(users_middleware_1.default.validateRequiredUserBodyFields, users_middleware_1.default.validateSameEmailDoesntExist, user_controller_1.default.createUser);
        this.app.route('/users/:userId')
            .all((req, res, next) => {
            next();
        })
            .get((req, res) => {
            res.status(200).send(`GET to users ${req.params.userId}`);
        })
            .put((req, res) => {
            res.status(200).send('PUT to users');
        })
            .patch((req, res) => {
            res.status(200).send('PATCH to users');
        })
            .delete((req, res) => {
            res.status(200).send('DELETE to users');
        });
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
