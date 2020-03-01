'use strict';

import angular from 'angular';
import SchoolCalculatorPageComponent from './components/page/school-calculator-page.component';
import SchoolCalculatorGradeComponent from './components/grade/school-calculator-grade.component';
import ResourceService from './services/resource.service';
import SchoolModel from './models/school.model';
import GradeModel from './models/grade.model';
import StudentModel from './models/student.model';


const SCHOOL_CALCULATOR_MODULE = angular
  .module('school-calculator.module', [])
  .component('schoolCalculatorPage', SchoolCalculatorPageComponent)
  .component('schoolCalculatorGrade', SchoolCalculatorGradeComponent)
  .factory('SchoolModel', () => SchoolModel)
  .factory('GradeModel', () => GradeModel)
  .factory('StudentModel', () => StudentModel)
  .service('ResourceService', ResourceService);

export { SCHOOL_CALCULATOR_MODULE };
