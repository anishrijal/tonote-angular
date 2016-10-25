angular.module('notesApp.services', []).factory('Notes', function($resource) {
  return $resource('http://localhost:3000/server/notes/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});
