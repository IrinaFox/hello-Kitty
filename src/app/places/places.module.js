import {routerPlaces} from '../app/places/places.route';
import {PlacesController} from '../app/places/places.controller';

angular.module('places', [])
  .config(routerPlaces)
  .controller('PlacesController', PlacesController);



