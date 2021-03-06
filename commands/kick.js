const {
  SlashCommandBuilder
} = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a person.')
    .addUserOption(option =>
      option.setName('target')
      .setDescription('Member to kick')
      .setRequired(true))
    .addStringOption(option =>
        option.setName('reason')
        .setDescription('Reason for kick')
        .setRequired(false)),
  async execute(interaction, client) {
    const user = client.guilds.cache.get(interaction.guildId).members.cache.get(interaction.options.getUser('target').id);
    const executer = client.guilds.cache.get(interaction.guildId).members.cache.get(interaction.user.id);

    if (!executer.permissions.has(client.discord.Permissions.FLAGS.KICK_MEMBERS)) return interaction.reply({
      content: 'You do not have the required permission to execute this command! (`KICK_MEMBERS`)',
      ephemeral: true
    });

    if (user.roles.highest.rawPosition > executer.roles.highest.rawPosition) return interaction.reply({
      content: 'The person you want to kick is above you!',
      ephemeral: true
    });

    if (!user.kickable) return interaction.reply({
      content: 'The person you want to kick is above me! So I cant kick him/her.',
      ephemeral: true
    });

    if (interaction.options.getString('reason')) {
      user.kick(interaction.options.getString('reason'))
      interaction.reply({
        content: `**${user.user.tag}** Has been successfully kicked !`
      });
    } else {
      user.kick()
      interaction.reply({
        content: `**${user.user.tag}** Has been successfully kicked !`
      });
    };
  },
};