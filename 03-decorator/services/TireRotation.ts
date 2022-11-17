import { CarService } from './CarService';

export class TireRotation implements CarService {
    private service: CarService;

    constructor(service: CarService) {
        this.service = service;
    }

    getCost(): number {
        return 15 + this.service.getCost();
    }

    getDescription(): string {
        return this.service.getDescription() + ', and tire rotation';
    }
}