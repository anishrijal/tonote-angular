angular.module('notesApp.services', []).factory('Note', function($resource, $state, $stateParams) {

  var resource = $resource('http://localhost:3000/notes/:id', { id: '@_id' });
  var notes = resource.query();
  var editNote = null;
  var createdDate = new Date();

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
              newNote.date = createdDate;
            })
            $state.go('list');
          },
    update: function(){

      editNote.$save().then(function(newNote){
        newNote.editDate = new Date();
        notes[notes.indexOf(newNote)] = newNote;
        $state.go('list');
      })
    },
    setEditNote: function(note){

      editNote =note;

      $state.go('edit');
    },
    getEditNote: function(){
      return editNote;
    },
    cancelUpdate: function(){
      editNote = null;
      $state.go('list');

    }

  };
});
