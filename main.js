const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });


const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);


    client.commands.set(command.name, command);


}


client.once('ready', () => {
    console.log('Luxury Helper is now available');


});






client.on('guildyMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('868893943532765227').send(`Welcome <@${guildMember.user.id}> to our server! Make sure to check out the rules channel!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'twitter') {
        client.commands.get('twitter').execute(message, args);
    }
    if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else if (command === 'member') {
        client.commands.get('member').execute(message, args);
    } else if (command === 'information') {
        client.commands.get('information').execute(message, args);
    } else if (command === 'commands') {
        client.commands.get('commands').execute(message, args)
    } else if (command === 'muted') {
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'add') {
        client.commands.get('add').execute(message, args);
    } else if (command === 'premium') {
        client.commands.get('premium').execute(messagem, args);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    }







});


client.login('YOUR BOTS TOKEN');