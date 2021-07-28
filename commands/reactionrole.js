module.exports = {
    name: 'reactionrole',
    description: "react to get a role",
    async execute(message, args, Discord, client) {
        const channel = '869766046918279200'
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Yellow Team");
        const redTeamRole = message.guild.roles.cache.find(role => role.name === "Red Team");
    
        const yellowTeamEmoji = '🍋';
        const redTeamEmoji = '🧧';

        let embed = new Discord.MessageEmbed()
        .setColor('#F0CC1E')
        .setTitle('Choose a team.')
        .setDescription('No blue or purple allowed.\n\n'
            + `${yellowTeamEmoji} for yellow team\n`
            + `${redTeamEmoji} for red team`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(redTeamEmoji);

        // Any member, user, entity that reacts to this embed will be passed down into this event
        // However, we need to stop the bot from entering this event
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
                }
            } else {
                return;
            }
        });
    }
}
