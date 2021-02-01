const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
  message.channel.send('Pingim: ${client.ping}');
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["p"],
  permLevel: 0
};

exports.help = {
  name: "ping",
  description: "Botun pingini gösterir",
  usage: "ping"
};