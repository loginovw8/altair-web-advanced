import { CarService } from './CarService';

export class OilChange implements CarService {
    private service: CarService; 

    constructor(service: CarService) {
        this.service = service;
    }

    getCost(): number {
        return 10 + this.service.getCost();
    }

    getDescription(): string {
        return this.service.getDescription() + ', and oil change';
    }
}