angular
  .module('Anubis')
  .controller('ChatDetailCtrl', ChatDetailCtrl);

function ChatDetailCtrl ($scope, $stateParams) {
  var chatId = $stateParams.chatId;
  $scope.chat = $scope.$meteorObject(Chats, chatId, false);

  $scope.messages = $scope.$meteorCollection(function() {
    return Messages.find({ chatId: chatId });
  }, false);

  $scope.data = {};
  $scope.sendMessage = sendMessage;

  function sendMessage () {
    // todo: implement this logic
  }
}
