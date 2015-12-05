angular
  .module('Anubis')
  .controller('ChatsCtrl', ChatsCtrl);

function ChatsCtrl ($scope) {

  $scope.chats = $scope.$meteorCollection(Chats, false);
  $scope.remove = remove;

  function remove (chat) {
    $scope.chats.remove(chat);
  }
}
