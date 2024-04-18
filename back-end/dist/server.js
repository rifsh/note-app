"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const db_connection_1 = require("./db_connection");
(0, db_connection_1.connection)();
_1.default.listen(process.env.PORT, () => {
    console.log('Port running in port', process.env.PORT);
});
