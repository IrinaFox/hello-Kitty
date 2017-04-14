export function FeedbacksRouter ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('feedbacks', {
      url: '/feedbacks',
      templateUrl: 'app/feedbacks/feedbacks.html',
      controller: 'FeedbacksController',
      controllerAs: 'feedbacks'
    });
}
