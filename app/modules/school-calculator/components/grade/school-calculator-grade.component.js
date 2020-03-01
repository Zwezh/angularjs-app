import template from './school-calculator-grade.component.html';
import StudentModel from '../../models/student.model';

class SchoolCalculatorGradeComponent {

    onDeleteStudent(id) {
        this.grade.deleteStudent(id)
    }

    onAddStudent(form) {
        this.grade.addNewStudent(this.newStudent);
        this.newStudent = new StudentModel();
        form.$setPristine();
    }
    getErrorStyle(control) {
        return control.$dirty && control.$error.required ? 'is-invalid' : '';
    }
}

export default {
    template: template,
    bindings: {
        grade: '<'
    },
    controller: SchoolCalculatorGradeComponent,
    bindToController: true
}