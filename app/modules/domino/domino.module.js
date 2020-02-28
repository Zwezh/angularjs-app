'use strict';

import angular from 'angular';
import DominoPageComponent from './components/page/domino-page.component';
import DominoDetailsComponent from './components/domino-details/domino-details.component';
import { dominoConstants } from './constants/domino.constants';
import DominoModel from './models/domino.model';
import ModelService from './services/model.service';

const DOMINO_MODULE = angular
    .module('domino.module', [])
    .constant('dominoConstants', dominoConstants)
    .component('dominoPage', new DominoPageComponent())
    .component('dominoDetails', new DominoDetailsComponent())
    .factory('DominoModel', () => DominoModel)
    .service('ModelService', ModelService);

export { DOMINO_MODULE };
