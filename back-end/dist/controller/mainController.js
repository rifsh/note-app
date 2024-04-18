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
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesConstroller = void 0;
const main_servc_1 = require("../services/main-servc");
const notesAdding = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const notesValues = req.body;
    const data = yield main_servc_1.mainSrvc.notesEnteringsrvc(notesValues);
    if (data) {
        res.status(200).json({
            message: 'succcess',
            data
        });
    }
    else {
        res.status(302).json({
            message: 'something wrong'
        });
    }
});
const notesViewing = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield main_servc_1.mainSrvc.notesViewwingsrvc();
    if (data) {
        res.status(200).json({
            message: 'succcess',
            data
        });
    }
    else {
        res.status(404).json({
            message: 'something wrong'
        });
    }
});
exports.notesConstroller = {
    notesAdding,
    notesViewing
};
