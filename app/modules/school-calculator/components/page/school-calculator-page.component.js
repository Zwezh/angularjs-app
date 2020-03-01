import template from './school-calculator-page.component.html';
import SchoolModel from '../../models/school.model';
class SchoolCalculatorPageComponent {

    static get $inject() { return ['ResourceService']; }

    constructor(ResourceService) {
        this.schoolModel = new SchoolModel(ResourceService);
        this.selectedGrade = null;
        this.schoolModel.loadGrades();
    }

    onAddGrade() {
        this.schoolModel.addNewGrade();
    }

    onSelectGrade(grade) {
        this.schoolModel.selectedGrade = grade;
    }

    onDeleteGrade(id) {
        this.schoolModel.deleteGrade(id);
    }
}

export default {
    template: template,
    controller: SchoolCalculatorPageComponent,
    bindToController: true
}