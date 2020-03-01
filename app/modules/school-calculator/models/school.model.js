import angular from 'angular';

import GradeModel from './grade.model';
import StudentModel from './student.model';

export default class SchoolModel {

    constructor(resourceService) {
        this.resourceService = resourceService;
        this.selectedGrade = null;
        this.gradeCollection = new Array();
    }

    get gpaAverage() {
        let result = 0;
        let size = 0;
        const sum = this.gradeCollection.reduce((accumulator, currentGrade) => {
            let result = accumulator;
            if (currentGrade.averageGpa) {
                size++;
                result = accumulator + currentGrade.averageGpa;
            }
            return result
        }, 0);
        if (size) {
            result = (sum / size).toFixed(2);
        }
        return result;
    }

    loadGrades() {
        this.resourceService.getGrades()
            .then(response => { this._initialize(response) });
    }

    addNewGrade() {
        this.gradeCollection = [...this.gradeCollection, new GradeModel(this._getMaxId() + 1)];
    }

    deleteGrade(id) {
        this.gradeCollection = this.gradeCollection.filter(grade => grade.id !== id);
        
        if (!this.gradeCollection.length) {
            this.selectedGrade = null;
        } else if (id === this.selectedGrade.id) {
            this.selectedGrade = this.gradeCollection[0];
        }
    }

    _initialize(dataCollection) {
        this.gradeCollection = dataCollection.map(grade => {
            const tempGrade = new GradeModel(grade.id, grade.name);
            tempGrade.studentCollection = grade.students.map(student => new StudentModel(student.id, student.name, student.gpa));
            return tempGrade;
        });
        this.selectedGrade = this.gradeCollection[0];
    }

    _getMaxId() {
        let maxId = 0;
        this.gradeCollection.forEach((grade) => {
            if (maxId < grade.id) {
                maxId = grade.id;
            }
        })
        return maxId;
    }
}