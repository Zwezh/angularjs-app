'use strict';

import angular from 'angular';
import DominoPageComponent from './components/page/domino-page.component';
import { dominoConstants } from './constants/domino.constants';
import { DominoModel } from './models/domino.model';

const DOMINO_MODULE = angular
    .module('domino.module', [])
    .component('dominoPage', new DominoPageComponent())
    .factory('DominoModel', () => {
        return DominoModel;
    })
    .constant('dominoConstants', dominoConstants);

export { DOMINO_MODULE };
