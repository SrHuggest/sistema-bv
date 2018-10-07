const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Não pode fazer isso.");

let mensagem = JSON.parse(fs.readFileSync("./setbvm.json", "utf8"));

mensagem[message.guild.id] = {
    mensagem: args.join(" ")
  };

  fs.writeFile("./setbvm.json", JSON.stringify(mensagem), (err) => {
    if (err) console.log(err)
  });


  let bvcEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Mensagem setada com sucesso")
  .setDescription(`Nova mensagem **${args.join(" ")}**`);

  message.channel.send(bvcEmbed);

}
  module.exports.help = {
    name:"a"
  }