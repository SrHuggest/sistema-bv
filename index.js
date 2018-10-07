const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN
const fs = require('fs');

bot.on('ready', () => {

    });

bot.on('guildMemberAdd', async member => {

let ler = JSON.parse(fs.readFileSync("./setbvc.json", "utf8"));
let ler2 = JSON.parse(fs.readFileSync("./setbvm.json", "utf8"));

  const canal = member.guild.channels.find(ch => ch.name === ler[member.guild.id].channels);
  canal.send(ler2[member.guild.id].mensagem)
});

    

bot.on("message", message => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: ">!"
    };
 }



 let prefix = prefixes[message.guild.id].prefixes

  if(!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 //Anti-Comando errado

 let command = message.content.split(" ")[0];
 command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);
  


  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err);
  }
})
bot.login(TOKEN)