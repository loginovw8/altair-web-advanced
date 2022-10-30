import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma: PrismaClient  = new PrismaClient();
const app: Express = express();

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

app.get("/", async (req: Request, res: Response) => {
  const items = await prisma.items.findMany();

  res.status(200).send(items);
});

app.post("/store", async (req: Request, res: Response) => {
  const { title, image } = req.body;

  await prisma.items.create({
    data: {
      title,
      image
    }
  });

  res.status(201).send();
});