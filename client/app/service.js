angular.module('notesApp.services', []).factory('Note', function($resource) {
  return $resource('http://localhost:3000/app/notes/:id', { id: '@_id' },
    { create: { method: "POST" }, save: { method: "PUT" } });
  });
