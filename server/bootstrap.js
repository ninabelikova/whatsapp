Meteor.startup(function() {
  if (Chats.find().count() === 0) {
    Messages.remove({});

    var messages = [
      {
        text: 'Sod off, Harry!',
        timestamp: moment().subtract(1, 'hours').toDate()
      },
      {
        text: 'Is it me you are looking for?',
        timestamp: moment().subtract(2, 'hours').toDate()
      },
      {
        text: 'I wanna eat cheese.',
        timestamp: moment().subtract(1, 'days').toDate()
      }
    ];

    messages.forEach(m => {
      Messages.insert(m);
    });

    var chats = [
      {
        name: "Albus Dumbledore",
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
      },
      {
        name: 'Ginny Weasley',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
      },
      {
        name: 'Sirius Black',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
      }
    ];

    chats.forEach(chat => {
      let message = Messages.findOne({chatId: {$exists: false}});
      chat.lastMessage = message;
      let chatId = Chats.insert(chat);
      Messages.update(message._id, {$set: {chatId: chatId}});
    });
  }

});
