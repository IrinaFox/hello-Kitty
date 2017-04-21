export function FeedbacksRouter ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('categories.feedbacks', {
      url: 'feedbacks',
      templateUrl: 'app/feedbacks/feedbacks.html',
      controller: 'FeedbacksController',
      controllerAs: 'feedbacks'
    });
}
