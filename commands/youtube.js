module.exports = {
    name: 'youtube',
    description: "sends the youtube link!",
    execute(message, args){

        if(message.member.roles.cache.has('869714056288821259')){
            message.channel.send('https://www.youtube.com/codelyon');
        } else {
            message.channel.send('Access reauthorized.');
            message.member.roles.add('869714056288821259');
        }
    }
}
