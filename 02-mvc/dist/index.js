"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const ItemsController_1 = require("./controllers/ItemsController");
const app = (0, express_1.default)();
const itemsController = new ItemsController_1.ItemsController();
app.use(express_1.default.static('public'));
app.use(express_1.default.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.get("/", (req, res) => {
    res.render('home');
});
app.get("/items", (req, res) => {
    itemsController.index(req, res);
});
app.get("/items/:id", (req, res) => {
    itemsController.show(req, res);
});
app.get("/items/action/create", (req, res) => {
    itemsController.create(req, res);
});
app.post("/store", (req, res) => {
    itemsController.store(req, res);
});
