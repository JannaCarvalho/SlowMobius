const { getVoiceConnection } = require('@discordjs/voice');
const helper = require('../../src/utils/helper');
const intervals = require('../../src/utils/intervals');
const Invasion = require('../../src/invasions/invasion');

module.exports = {
  name: 'startinvasion',
  description: 'Starts the invasion interval which calls out waves',

  async execute(client, interaction) {
    const connection = getVoiceConnection(interaction.guild.id);

    if (!helper.botConnected(connection)) {
      return interaction.reply({
        content: 'Bot is not connected to a voice channel',
        ephemeral: true
      });
    }

    const intervalList = intervals.getIntervals();

    if (intervalList.length > 0) {
      return interaction.reply({
        content: 'An interval is already running',
        ephemeral: true
      });
    }

    const totalSeconds = helper.getRemainingSeconds(new Date());
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    interaction.reply(`Starting **Invasion** timer in **${minutes}m ${seconds}s**`);

    await helper.pauseExecution(totalSeconds * 1000);

    const invasion = new Invasion(connection);

    invasion.startRespawnInterval();
  }
};