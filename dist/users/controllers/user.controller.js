"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_mw_1 = require("../../error/error.mw");
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    listUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_service_1.default.list(100, 0);
                console.log('users value');
                res.status(200).json(users);
            }
            catch (e) {
                // console.log(e.message, e.name, e.stack)
                // console.log(e.name)
                // console.log(e.message)
                // console.log(e.stack)
                const msg = e;
                next(new error_mw_1.HttpError(500, 'Users Not found'));
                // res.status(500).json({ error: e.message })
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_service_1.default.readById(req.body.id);
            res.status(200).json(user);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.password = yield req.body.password;
            const userId = yield user_service_1.default.create(req.body);
            res.status(201).send({ id: userId });
        });
    }
    patchUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.password) {
                req.body.password = req.body.password;
            }
            yield user_service_1.default.patchById(req.body.id, req.body);
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = user_service_1.default.putById(req.body.id, req.body);
            res.status(204).send(result);
        });
    }
    removeUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_service_1.default.patchById(req.body.id, req.body);
            res.status(204).send(result);
        });
    }
}
exports.default = new UserController();
