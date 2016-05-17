import angular from 'angular';
import $ from 'jquery';

// console.log($);
// console.log(angular);

import { HomeController } from './controllers/home.controller';



angular
  .module('app',[])
  .controller('HomeController',HomeController)
;