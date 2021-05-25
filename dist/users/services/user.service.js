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
const user_dao_1 = __importDefault(require("../dao/user.dao"));
class UserService {
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('init List Function');
            const myList = yield this.getRandomList();
            console.log('call getRandomList');
            const myStrings = myList.map(value => value.toString());
            console.log('map myList');
            return myStrings;
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.addUser(resource);
        });
    }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.putUserById(id, resource);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.getUserById(id);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.deleteUserById(id);
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.patchUserById(id, resource);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_dao_1.default.getUserByEmail(email);
        });
    }
    getRandomList() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Error in getRandomList');
        });
    }
}
exports.default = new UserService();
