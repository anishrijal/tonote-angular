angular.module('notesApp.services', []).factory('Note', function($resource, $state, $stateParams) {

  var resource = $resource('http://localhost:3000/notes/:id', { id: '@_id' });
  var notes = resource.query();

  return {
    getNotes: notes,
    deleteNote: function(note){
      note.$delete().then(function(){
          notes.splice(notes.indexOf(note),1);
      });
    },
    addNote:  function(note) {
        new resource(note).$save().then(function (newNote) {
              notes.push(newNote);
            })
            $state.go('list');
          },
    show: {method: 'GET'},
    update:{
      method : 'PUT',
      params : {id : '@_id'}
    }

  };
});
