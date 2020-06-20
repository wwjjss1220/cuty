const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('ON');
});

client.on('message', (message) => {
  if(message.content === '메롱') {
    message.reply('메롱');
  }
});

client.on('message', (message) => {
  if(message.content === '조롱') {
    message.reply('삐짐 ㅅㄱ');
  }
});

client.on('message', (message) => {
  if(message.content === '메찌') {
    message.reply('"찌"');
  }
});

client.on('message', (message) => {
  if(message.content === '동휘는') {
    message.reply('또롱이지');
  }
});

client.on('message', (message) => {
  if(message.content === '팡규팡규') {
    message.reply('양팡규');
  }
});

client.on('message', (message) => {
  if(message.content === '귀승') {
    message.reply('귀(지가득)승(민이)');
  }
});

client.on('message', (message) => {
  if(message.content === '야') {
    message.reply('뭐');
  }
});

client.on('message', (message) => {
  if(message.content === '오리오리') {
    message.reply('메오리');
  }
});

client.on('message', (message) => {
  if(message.content === '-엄') {
    message.reply('(마가) 준(비해준) 식(사)');
  }
});

client.on('message', (message) => {
  if(message.content === '메롱이') {
    message.reply('"너"');
  }
});

client.on('message', (message) => {
  if(message.content === '여기서 가장 귀요미는') {
    message.reply('누가봐도 "나"지');
  }
});

client.on('message', (message) => {
  if(message.content === '혁스혁스') {
    message.reply('짱혁스');
  }
});

client.on('message', (message) => {
  if(message.content === '너 메롱이 ㅅㄱ') {
    message.reply('귀요미가 뭐라는건지 모르겠네>?');
  }
});

client.on('message', (message) => {
  if(message.content === '아 진짜 이 말 때문에 화') {
    message.reply('려한 조명이 나비보벳따우');
  }
});

client.on('message', (message) => {
  if(message.content === 'ㅁㄹ') {
    message.reply('ㅃㅈ');
  }
});

client.on('message', (message) => {
  if(message.content === '우리 빵민아가 제일 예쁘긴 하지') {
    message.reply('ㅇㅈ');
  }
});

client.on('message', (message) => {
  if(message.content === '메롱이들이 뭐라는거야') {
    message.reply('너?');
  }
});

client.login(token);
