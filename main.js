const config = require('./config.json');

const Discord = require('discord.js');

const client = new Discord.Client({partials:["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = "-";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Courier is online!');
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Recruit');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('869750084785545216').send(`Welcome <@${guildMember.user.id}> to our server!`);
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        // message.channel.send('pong!');
        client.commands.get('ping').execute(message, args);
    } else if (command == 'youtube'){
        // message.channel.send('https://www.youtube.com/codelyon');
        client.commands.get('youtube').execute(message, args);
    } else if (command == 'kickcheck'){
        client.commands.get('kickcheck').execute(message, args);
    } else if (command == 'command'){
        client.commands.get('command').execute(message, args, Discord);
    } else if (command == 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else {
        message.channel.send('That command does not exist!');
    }
});

client.login(config.token);    // Must be last line in the file
