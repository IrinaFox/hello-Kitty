import {routerPlaces} from 'places.route';
import {PlacesController} from 'places.controller';

angular.module('places', [])
  .config(routerPlaces)
  .controller('PlacesController', PlacesController);



