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
exports.mainSrvc = void 0;
const notes_schema_1 = require("../schema/notes-schema");
const notesEnteringsrvc = (values) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!values || !values.title || !values.description) {
            return false;
        }
        else {
            const notesAdding = yield notes_schema_1.notesModel.create({ title: values.title, desciption: values.description, color: values.color });
            return true;
        }
    }
    catch (error) {
        console.log(error);
    }
});
const notesViewwingsrvc = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield notes_schema_1.notesModel.find();
        return notes;
    }
    catch (error) {
        console.log(error);
    }
});
exports.mainSrvc = {
    notesEnteringsrvc,
    notesViewwingsrvc
};
