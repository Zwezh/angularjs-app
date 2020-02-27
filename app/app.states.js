'use strict';

const appDomino = {
  name: 'domino',
  url: '/domino',
  component: 'dominoPage',
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

    return import('./modules/domino/domino.module')
      .then(mod => $ocLazyLoad.load(mod.DOMINO_MODULE))
      .catch(err => {
        throw new Error('Ooops, something went wrong, ' + err);
      });
  }
};

const appSchoolCalculator = {
    name: 'school',
    url: '/school',
    component: 'schoolCalculatorPage',
    lazyLoad: ($transition$) => {
        const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

        return import('./modules/school-calculator/school-calculator.module')
            .then(mod => $ocLazyLoad.load(mod.SCHOOL_CALCULATOR_MODULE))
            .catch(err => {
                throw new Error('Ooops, something went wrong, ' + err);
            });
    }
};

export { appDomino, appSchoolCalculator };
