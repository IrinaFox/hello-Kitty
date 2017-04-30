import { FeedbacksRouter } from './feedbacks.router';
import { FeedbacksController } from './feedbacks.controller';
import { ModalControllerFeedbacks } from './feedbacks.modalcontrollerfeedbacks';
import { GithubContributorService } from '../components/githubContributor/githubContributor.service';

var feedbacks = angular.module('feedbacks', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .service('githubContributor', GithubContributorService)
  .config(FeedbacksRouter)
  .controller('FeedbacksController', FeedbacksController)
  .controller('ModalControllerFeedbacks', ModalControllerFeedbacks);


export default feedbacks;
