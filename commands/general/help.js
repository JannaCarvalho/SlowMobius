const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Lists all the commands for the bot',

  async execute(client, interaction) {
    const embed = new MessageEmbed();
    embed.setColor(0x0099FF)
    embed.setTitle('<:NewWorldLogo:1063466582661140530> Slow Mobius | Commands <:NewWorldLogo:1063466582661140530> ');
    embed.setThumbnail(client.user.displayAvatarURL());
    embed.setDescription('Commands for using Slow Mobius bot')
	
    const commandList = [];

client.commands.forEach((cmd) => {
      if (cmd.name !== 'help') {
        commandList.push(`
/**${cmd.name}** - ${cmd.emoji} \_${cmd.description}\_`);
      }
    });

    embed.addField(' ', `${commandList.join('\n')}`);

 
   	embed.setImage("https://i.imgur.com/8Lap0Fu.png")
    embed.setTimestamp()
	embed.setFooter({ text: 'Slow Mobius v1.1', iconURL: client.user.displayAvatarURL() });  
      
    interaction.reply({ embeds: [embed] });
  }
};
