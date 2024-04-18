"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const mainController_1 = require("../controller/mainController");
exports.router = express_1.default.Router();
exports.router.post('/notes-enter', mainController_1.notesConstroller.notesAdding);
exports.router.get('/notes-view', mainController_1.notesConstroller.notesViewing);
