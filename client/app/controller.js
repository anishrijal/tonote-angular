angular.module('notesApp.controllers', [])

  .controller('allNotesCtrl',function($scope, $state, $stateParams, Note) {


    $scope.notes = Note.query();

    var id =$stateParams.id;
    var note = Note.getOne();

    $scope.deleteNote = function(note) {
    note.$delete(note);
    };
    $state.go('list');

    // $scope.deleteNote = function(note) {
    //   note.$delete().then(function(){
    //       $scope.notes.splice($scope.notes.indexOf(note),1);
    //   });
    //   $state.go('list');
    // }
  })

.controller('addCtrl', function($scope, $state, Note) {
    $scope.state = new Note();

    $scope.cancel = function(){
      $state.go('list');
    }

    $scope.save = function(note) {
        Note.create(note)
              // new $scope.Note(note).$save().then(function (newNote) {
              //       $scope.notes.push(newNote);
        $state.go('list');
        };

  })
.controller('editCtrl', function($scope, $state, $stateParams, Note) {

  var id =$stateParams.id;

  if(id){
    var note = Note.getOne(id);
    $scope.note._id = note._id;
    $scope.note.title = note.title;
    $scope.note.description = note.description;
  }

  $scope.cancel= function(){
    $state.go('list');
  }
  console.log("inside edit");
  $scope.save = function(note) {
    Note.save(note);
    // $scope.note.$update(function() {
      $state.go('list');
    
  };

});
