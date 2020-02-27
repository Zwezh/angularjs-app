'use strict'
import './styles.css'
import angular from 'angular';
import '@uirouter/angularjs';
import 'oclazyload';
import { appRouting } from './app.routing';

import MenuNavigationComponent from './layout/menu-navigation/menu-navigation.component';

angular
    .module('app', [
        'ui.router',
        'oc.lazyLoad'
    ])
    .config(appRouting)
    .component('menuNavigation', new MenuNavigationComponent());

