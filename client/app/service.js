angular.module('notesApp.services', []).factory('Note', function($resource, $state, $stateParams) {

  var resource = $resource('http://localhost:3000/notes/:id', { id: '@_id' });
  var notes = resource.query();
  var editNote = null;
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

    update: function(){
      editNote.$save().then(function(newNote){
        notes[notes.indexOf(newNote)] = newNote;
        $state.go('list');
      })
    },
    setEditNote: function(note){
      editNote =note;
      $state.go('edit');
    },
    getEditNote: function(){
      console.log(editNote);
      return editNote;
    },
    cancelUpdate: function(){
      editNote = null;
      $state.go('list');

    }

  };
});
