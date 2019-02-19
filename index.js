const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});



bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);




//  bot.user.setGame("on SourceCade!");
});

bot.on("message", async message => {
//  if(message.autor.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "!";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  //!say Hello
  let myRole = message.guild.roles.find(role => role.name === "rainbow");

  function hexChanger(value){
    if (value < 10){
      return value;
    }
    else if(value == 10) return 'A';
    else if(value == 11) return 'B';
    else if(value == 12) return 'C';
    else if(value == 13) return 'D';
    else if(value == 14) return 'E';
    else return 'F';
  }

function reverseHex(reverseValue){
  if (reverseValue == 0) return 'F';
  else if (reverseValue == 1) return 'E';
  else if (reverseValue == 2) return 'D';
  else if (reverseValue == 3) return 'C';
  else if (reverseValue == 4) return 'B';
  else if (reverseValue == 5) return 'A';
  else if (reverseValue == 6) return 9;
  else if (reverseValue == 7) return 8;
  else if (reverseValue == 8) return 7;
  else if (reverseValue == 9) return 6;
  else if (reverseValue == 10) return 5;
  else if (reverseValue == 11) return 4;
  else if (reverseValue == 12) return 3;
  else if (reverseValue == 13) return 2;
  else if (reverseValue == 14) return 1;
  else return 0;
}


var step = 2;
var colorArray = [];

for (b1 = 0; b1 < 16; b1 += step){
  for (b2 = 0; b2 < 16; b2 += step){
    r1 = 15; r2 = 15; g1 = 0; g2 = 0;
      colorArray.push('#'+hexChanger(r1)+hexChanger(r2)+hexChanger(g1)+hexChanger(g2)+hexChanger(b1)+hexChanger(b2));
  }
}
for (r1 = 0; r1 < 16; r1 += step){
  for (r2 = 0; r2 < 16; r2 += step){
    g1 = 15; g2 = 15; b1 = 0; b2 = 0;
      colorArray.push('#'+reverseHex(r1)+reverseHex(r2)+reverseHex(g1)+reverseHex(g2)+reverseHex(b1)+reverseHex(b2));
  }
}
for (g1 = 0; g1 < 16; g1 += step){
  for (g2 = 0; g2 < 16; g2 += step){
    r1 = 0; r2 = 0; b1 = 15; b2 = 15;
      colorArray.push('#'+hexChanger(r1)+hexChanger(r2)+hexChanger(g1)+hexChanger(g2)+hexChanger(b1)+hexChanger(b2));
  }
}
for (b1 = 0; b1 < 16; b1 += step){
  for (b2 = 0; b2 < 16; b2 += step){
    r1 = 15; r2 = 15; g1 = 0; g2 = 0;
      colorArray.push('#'+reverseHex(r1)+reverseHex(r2)+reverseHex(g1)+reverseHex(g2)+reverseHex(b1)+reverseHex(b2));
  }
}
for (r1 = 0; r1 < 16; r1 += step){
  for (r2 = 0; r2 < 16; r2 += step){
    g1 = 15; g2 = 15; b1 = 0; b2 = 0;
      colorArray.push('#'+hexChanger(r1)+hexChanger(r2)+hexChanger(g1)+hexChanger(g2)+hexChanger(b1)+hexChanger(b2));
  }
}
for (g1 = 0; g1 < 16; g1 += step){
  for (g2 = 0; g2 < 16; g2 += step){
    r1 = 0; r2 = 0; b1 = 15; b2 = 15;
    colorArray.push('#'+reverseHex(r1)+reverseHex(r2)+reverseHex(g1)+reverseHex(g2)+reverseHex(b1)+reverseHex(b2));
  }
}

var stop = 0;

async function colorchanger (){
  for (var i = 0; i < colorArray.length - 1; i++){
      myRole.setColor(colorArray[i]);

      if (stop === 1) break;
  }
}

if (cmd === `start`){

  for (var rain = 0; rain < 999; rain++){
    colorchanger();
  }
  stop = 0
}

if (cmd === `stop`){
  stop = 1;
  myRole.setColor('#FFFFFF')
          .then(updated => console.log(`Stoped`))
          .catch(console.error);
}
if (cmd === `role`){
    message.reply('You need to join a voice channel first!');
}

  if (!message.guild) return;
  if (message.content === '/join') {
  // Only try to join the sender's voice channel if they are in one themselves
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => { // Connection is an instance of VoiceConnection
        message.reply('I have successfully connected to the channel!');
      })
      .catch(console.log);
  } else {
    message.reply('You need to join a voice channel first!');
  }
}
/*
let prefix = botconfig.prefix;
if(message.author === bot.user) return;
if(message.content.startsWith(`${prefix}hello`)) {
    message.channel.sendMessage("Привет я БОТ!");
 }
*/

})


bot.login("NTM1MTQwMjAxMDY5MjgxMjgw.D0M8EA.Yaz5USW33fjD_SaqwQYYsmWOWH0");
