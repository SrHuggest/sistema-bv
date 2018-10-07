const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Não pode fazer isso.");

let channels = JSON.parse(fs.readFileSync("./setbvc.json", "utf8"));

channels[message.guild.id] = {
    channels: args[0]
  };

  fs.writeFile("./setbvc.json", JSON.stringify(channels), (err) => {
    if (err) console.log(err)
  });


  let bvcEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Canal setado com sucesso")
  .setDescription(`Novo canal <#${args[0]}>`);

  message.channel.send(bvcEmbed);

}
  module.exports.help = {
    name:"a"
  }