const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('ON');
});

client.on('message', (message) => {
  if(message.content === 'ㅁㄹ') {
    message.reply('ㅈㅎ');
  }
});

client.login(token);