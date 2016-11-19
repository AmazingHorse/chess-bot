const Discord = require('discord.js');
const client = new Discord.Client();
const chessboard = require('./chess-game');
const token = ''

client.on('ready', () => {
  console.log('Chess Bot 0.1. Start!');
});

client.on('message', message => {

  let prefix = "/"
  if(!message.content.startsWith(prefix)) {
    return;
  }

  if (message.content.startsWith(prefix + "chess")) {
    // var resp = chessboard.respond(message.content);
    // message.channel.sendMessage(resp);
    // set up a promise
    chessboard.respond(message.content).then((resp) => {
      return message.channel.sendMessage(resp)
    }).catch(console.error)
  }
});

client.login(token);
