const {EmbedBuilder} = require("discord.js");

const customProfile = (profile) => {
    const avatar = profile.avatar.replace(/_/g," ");
    const biome = profile.biome.replace(/_/g," ");
    const userProfile = new EmbedBuilder()
    .setColor(0xFF9021)
    .setTitle(`${profile.userName}`)
    .setAuthor({ name: 'Made by -> ~DireWolf', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' })
    .setDescription(`Avatar : ${avatar} Biome : ${biome}`)
    .setThumbnail('https://wallpapercave.com/wp/wp10426807.jpg')
    // .addFields({name: " " ,value: ````${profile.userName}````})
    // .addFields({name: " ", value: "```Gryphlion:  Dream```"})
    // .setImage("https://i.postimg.cc/YCRKNsSF/1681752972290.jpg")
    .setTimestamp()
    .setFooter({ text: 'Evening, Bookworm...', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' });

    return userProfile;
}

module.exports = {customProfile};
