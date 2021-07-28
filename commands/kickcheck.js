module.exports = {
    name: 'kickcheck',
    description: "checks if you have the power to kick or not",
    execute(message, args){

        if (message.member.permissions.has("KICK_MEMBERS")) {
            message.channel.send("You have the power to kick members.");
        } else {
            message.channel.send("You do not have the power to kick members.");
        }
    }
}
