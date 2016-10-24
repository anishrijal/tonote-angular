angular.module('notesApp.controllers', [])

  .controller('allNotesCtrl',function($scope, $state, Note) {


    $scope.notes = Note.query();

    $scope.deleteNote = function(note) {
      note.$delete().then(function(){
          $scope.data.notes.splice($scope.data.notes.indexOf(note),1);
      });
      $state.go('list');
    }
  })

.controller('addCtrl', function($scope, $state, $stateParams, Note) {
    $scope.note = new Note();

    $scope.cancel = function(){
      $state.go('list');
    }

    $scope.save = function() {
      $scope.note.$save(function() {
        console.log("inside save");
        $state.go('list');
      });
    };

  })
.controller('editCtrl', function($scope, $state, $stateParams, Notes) {

  $scope.cancel= function(){
    $state.go('list');
  }
  console.log("inside edit");
  $scope.save = function() {
    $scope.note.$update(function() {
      $state.go('list');
    });
  };
  $scope.loadMovie = function() {
      $scope.movie = Movie.get({ id: $stateParams.id });
  };

  $scope.loadMovie();

});


//     // Initial Data
//   	$scope.notes = [{
//       createdOn:1428237500771,
//       edit:false,
//       text:"#Hello, World!\n\nThis is your first Angular Markdown note. You can:\n\n* Click/Focus to edit\n\n* Click off/Blur to save\n\n* Add a new note  by clicking the plus sign above.\n\n* Delete this note\n\nMarkdown compiled using the fantastic [angular-markdown-editable](http://projects.quiver.is/angular-markdown-editable/) directive."
//     }];
//
//     // Add New Note
//     $scope.addNote = function(){
//       $scope.newNote = {};
//       $scope.newNote.createdOn = Date.now();
//       $scope.newNote.text = ' ';
//       $scope.newNote.edit = true;
//       $scope.notes.push($scope.newNote);
//       $scope.newNote = {};
//     };
//
//     // Delete Note
//     $scope.delete = function (i) {
//       var r = confirm("Are you sure you want to delete this note?");
//       if (r == true)
//         $scope.notes.splice(i, 1);
// 		};
//
//     // Update Note
//     $scope.update = function(i, note) {
//       $scope.notes[i].text = note;
//       $scope.notes[i].edit = false;
//     };
//
//   // End Controller
//   });
//
// // End Function
// })();
