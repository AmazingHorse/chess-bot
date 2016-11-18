const Discord = require('discord.js');
const client = new Discord.Client();
const chessboard = require('./chess-game');
const token = 'MjQ5MjkzNTAzNDQ2Nzc3ODU2.CxEMTw.Y12qa9KZqubFPXMDp8nS7o46HLI'

client.on('ready', () => {
  console.log('Chess Bot 0.1. Start!');
});

client.on('message', message => {

  let prefix = "/"
  if(!message.content.startsWith(prefix)) return;

  if (message.content === '/chess') {
    message.reply(chessboard.respond(message.content));
  }
});

client.login(token);
