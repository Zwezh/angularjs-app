'use strict';

import { appDomino, appSchoolCalculator } from './app.states';

appRouting.$inject = ['$urlRouterProvider', '$stateProvider'];

function appRouting($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state(appDomino);
  $stateProvider.state(appSchoolCalculator);
}

export { appRouting };
