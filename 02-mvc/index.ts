import express, { Express, Request, Response } from 'express';
import path from 'path';
import { ItemsController } from './controllers/ItemsController';

const app: Express = express();
const itemsController = new ItemsController();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get("/", (req: Request, res: Response) => {
  res.render('home');
});

app.get("/items", (req: Request, res: Response) => {
  itemsController.index(req, res);
});

app.get("/items/:id", (req: Request, res: Response) => {
  itemsController.show(req, res);
});

app.get("/items/action/create", (req: Request, res: Response) => {
  itemsController.create(req, res);
});

app.post("/store", (req: Request, res: Response) => {
  itemsController.store(req, res);
});
