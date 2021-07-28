module.exports = {
name: 'command',
    description: "Embeds",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F0CC1E')
        .setTitle('Orders')
        .setURL('https://www.color-hex.com/color/f0cc1e')
        .setDescription('Because I cannot read colors')
        .addFields(
            {name: 'Blue', value: 'Like the ocean'},
            {name: 'Red', value: 'Like blood'}
        )
        .setImage('https://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2016/03/DECECCO-CLAM-PASTA-5-copy.jpg')
        .setFooter('Linguini')
        message.channel.send(newEmbed)
    }
}
