'use strict';

import angular from 'angular';
import SchoolCalculatorPageComponent from './components/page/school-calculator-page.component';


const SCHOOL_CALCULATOR_MODULE = angular
  .module('school-calculator.module', [])
  .component('schoolCalculatorPage', new SchoolCalculatorPageComponent());

export { SCHOOL_CALCULATOR_MODULE };
