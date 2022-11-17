import { CarService } from './services/CarService';

class BasicInspection implements CarService {
    getCost(): number {
        return 25;
    }

    getDescription(): string {
        return 'Basic inspection';
    }
}
