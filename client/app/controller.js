angular.module('notesApp.controllers', [])

  .controller('allNotesCtrl',function($scope,  Note) {

    $scope.notes = Note.getNotes;

    $scope.deleteNote = Note.deleteNote;
  })
  .controller('addCtrl', function($scope, $state, $stateParams, Note) {

      $scope.save = Note.addNote;

      $scope.cancel = function(){
        $state.go('list');
      }
    })
  .controller('editCtrl', function($scope, $state,  $stateParams, Note) {



    // $scope.note = Note.show({id:$stateParams._id});
    // //   $scope.note = data;
    // // });
    // $scope.save =function(){
    //   Note.update($scope.note);
    //     $state.go('list');
    //   };

    $scope.note = $state.current.locals.note;
    $scope.save =function(note){
      Note.update({id: note.id}, note).promise.then(function(){
        $state.go('list');
      });
    //
    // //     $state.go('list');
    // //   };
    //
    $scope.cancel= function(){
      $state.go('list');
  }
    };


  });


// studentsManagement.controller("stController", [
// "$scope", "$route","$rootScope","stDataService","$location",
// 	function ($scope, $route,$rootScope,stDataService,$location) {
//         $scope.student = $route.current.locals.student;
//         $rootScope.title = "Student Info -" + $scope.student.Name;
//         $scope.updateInfo = function(student) {
//             stDataService.update({ id: student.Id }, student).$promise.then(function() {
//                 $location.url("/");
//                 alertify.log("Updated Info");
//             });
//         };
//     }
// ]);
