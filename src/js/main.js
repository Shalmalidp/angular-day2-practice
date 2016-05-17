import angular from 'angular';
import $ from 'jquery';

let url = 'https://secret-forest-21470.herokuapp.com/collections/angularday2';


// CONTROLLERS
import { HomeController } from './controllers/home.controller';

//REGISTERING COMPONENTS
angular
  .module('app',[])
  .constant('URL', url)
  .controller('HomeController',HomeController)
;