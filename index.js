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

client.on('message', (message) => {
  if(message.content === '메이플') {
    message.reply('"갓겜"');
  }
});

client.on('message', (message) => {
  if(message.content === '쥬지르나듐') {
    message.reply('쥬(이롱조만) 지(하지만조롱이죠) 르(노죠바나) 나(는맜있어) 둠(의수확롱이쥬?)');
  }
});

client.on('message', (message) => {
  if(message.content === '종환이는') {
    message.reply('조롱이쥬ㅅㄱ');
  }
});

client.on('message', (message) => {
  if(message.content === '만두만두') {
    message.reply('메롱만두');
  }
});

client.on('message', (message) => {
  if(message.content === '삐짐 ㅅㄱ') {
    message.reply('삐지면 메찌임');
  }
});

client.on('message', (message) => {
  if(message.content === '"야 장종환"') {
    message.reply('왜 불러~');
  }
});

client.on('message', (message) => {
  if(message.content === '안삐짐') {
    message.reply('그래도 조롱이임 ㅅㄱ');
  }
});

client.on('message', (message) => {
  if(message.content === '야스') {
    message.reply('야외섹스');
  }
});

client.login(token);
