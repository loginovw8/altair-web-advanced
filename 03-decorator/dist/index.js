"use strict";
class BasicInspection {
    getCost() {
        return 25;
    }
    getDescription() {
        return 'Basic inspection';
    }
}
let inspection = new BasicInspection();
console.log(inspection.getDescription());
