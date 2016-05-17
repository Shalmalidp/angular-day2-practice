import angular from 'angular';
import 'angular-ui-router';

import $ from 'jquery';

let url = 'https://secret-forest-21470.herokuapp.com/collections/angularday2';


// CONTROLLERS
import { HomeController } from './controllers/home.controller';
import { config } from './config';



//REGISTERING COMPONENTS
angular
  .module('app',['ui.router'])
  .constant('URL', url)
  .config(config)
  .controller('HomeController',HomeController)
;