const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN
const fs = require('fs');

bot.on('ready', () => {

    });

bot.on('guildMemberAdd', async member => {


let ler2 = JSON.parse(fs.readFileSync("./setbvm.json", "utf8"));
let ler = JSON.parse(fs.readFileSync("./setbvc.json", "utf8"));
const canal = member.guild.channels.find(ch => ch.id === ler[member.guild.id].channels);

let bp = ler2[member.guild.id].mensagem
let nada = bp.replace("{user}", member.user)

ler2[member.guild.id] = {
  mensagem: nada
}

canal.send(ler2[member.guild.id].mensagem)
});

bot.on('guildMemberRemove', async member => {


  let ler3 = JSON.parse(fs.readFileSync("./setbvms.json", "utf8"));
  let ler1 = JSON.parse(fs.readFileSync("./setbvc.json", "utf8"));
  const canal = member.guild.channels.find(ch => ch.id === ler1[member.guild.id].channels);
  
  if(ler3[member.guild.id].mensagem1.includes("{userl}")){
  let bp = ler3[member.guild.id].mensagem1
  let nada = bp.replace("{userl}", member.user.tag)
  
  ler3[member.guild.id] = {
    mensagem1: nada
  }
  
    canal.send(ler3[member.guild.id].mensagem1)
  }});

    

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
