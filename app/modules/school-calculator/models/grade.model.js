export default class GradeModel {
    constructor(id = null, name = '') {
        this.id = id;
        this.name = name;
        this.studentCollection = new Array();
    }

    get averageGpa() {
        let result = null;
        if (this.studentCollection.length) {
            const sum = this.studentCollection.reduce((accumulator, student) => accumulator + student.gpa, 0);
            result = sum / this.studentCollection.length
        }
        return result;
    }

    deleteStudent(id) {
        this.studentCollection = this.studentCollection.filter(student => student.id !== id);
    }

    addNewStudent(student) {
        student.id = this._getMaxId() + 1;
        this.studentCollection = [...this.studentCollection, student];
    }

    _getMaxId() {
        let maxId = 0;
        this.studentCollection.forEach((student) => {
            if (maxId < student.id) {
                maxId = student.id;
            }
        })
        return maxId;
    }
};
