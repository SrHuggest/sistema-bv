const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Não pode fazer isso.");

let mensagem1 = JSON.parse(fs.readFileSync("./setbvms.json", "utf8"));

  mensagem1[message.guild.id] = {
    mensagem1: args.join(" ")
  }

  fs.writeFile("./setbvms.json", JSON.stringify(mensagem1), (err) => {
    if (err) console.log(err)
  });


  let bvcEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Mensagem setada com sucesso")
  .setDescription(`Nova mensagem **${args.join(" ")}**`);

  message.channel.send(bvcEmbed);

};
  module.exports.help = {
    name:"a"
  }