angular.module('notesApp.controllers', [])

  .controller('allNotesCtrl',function($scope,  Note) {

    $scope.notes = Note.getNotes;

    $scope.edit = Note.setEditNote;

    $scope.deleteNote = Note.deleteNote;
  })
  .controller('addCtrl', function($scope, $state, $stateParams, Note) {

      $scope.save = Note.addNote;

      $scope.cancel = function(){
        $state.go('list');
      }
    })
  .controller('editCtrl', function($scope, $state,  $stateParams, Note) {

    $scope.cancel= Note.cancelUpdate;

    $scope.note = Note.getEditNote();

    $scope.save = Note.update;

  });
