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
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield prisma.items.findMany();
    res.status(200).send(items);
}));
app.post("/store", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, image } = req.body;
    yield prisma.items.create({
        data: {
            title,
            image
        }
    });
    res.status(201).send();
}));
