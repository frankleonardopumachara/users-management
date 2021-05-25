"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_routes_1 = require("./users/users.routes");
const error_mw_1 = require("./error/error.mw");
exports.app = express_1.default();
exports.routes = [];
/** Configure middlewares */
// Parse all incoming requests as JSON 
exports.app.use(express_1.default.json());
// Allow cross-origin requests
exports.app.use(cors_1.default());
/** Add routes to our application */
exports.routes.push(new users_routes_1.UsersRoutes(exports.app));
/** Make sure everything is working properly */
exports.app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});
// Error handling mw
exports.app.use(error_mw_1.mwError);
