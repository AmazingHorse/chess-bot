const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('MjQ5MjkzNTAzNDQ2Nzc3ODU2.CxEMTw.Y12qa9KZqubFPXMDp8nS7o46HLI');
