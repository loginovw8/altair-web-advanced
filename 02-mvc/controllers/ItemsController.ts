import { Request, Response } from 'express';
import { items, PrismaClient } from '@prisma/client';

const prisma: PrismaClient = new PrismaClient();

export class ItemsController {
    async index(req: Request, res: Response) {
        const items: items[] = await prisma.items.findMany();

        res.render('items/index', {
            'items': items,
        });
    }

    async show(req: Request, res: Response) {
        const item = await prisma.items.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });

        res.render('items/show', {
            'item': item
        });
    }

    create(req: Request, res: Response) {
        res.render('items/create');
    }

    async store(req: Request, res: Response) {
        const { title, image } = req.body;

        await prisma.items.create({
            data: {
                title,
                image
            }
        });

        res.redirect('/');
    }
}
