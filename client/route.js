angular.module('notesApp', ['ui.router', 'ngResource', 'notesApp.controllers', 'notesApp.services']);

angular.module('notesApp').config(function($stateProvider) {
  $stateProvider
  .state('list', {
    url: '/list',
    templateUrl: "app/allnotes.html",
     controller: 'allNotesCtrl'
  })
  .state('add', {
    url: '/list/add',
    templateUrl: "app/addOrEdit.html",
    controller: 'addCtrl'
  })
  .state('edit', {
    url: '/list/:id/edit',
    templateUrl: 'app/addOrEdit.html',
    controller: 'editCtrl'
  });
})
// .run(function($state) {
//   $state.go('list');
// });
