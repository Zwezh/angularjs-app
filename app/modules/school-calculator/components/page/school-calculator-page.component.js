import template from './school-calculator-page.component.html';
class SchoolCalculatorPageController {
    constructor() { }
}

export default class SchoolCalculatorPageComponent {
    constructor() {
        this.template = template;
        this.controller = SchoolCalculatorPageController;
    }
}