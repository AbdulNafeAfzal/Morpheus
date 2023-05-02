const {EmbedBuilder} = require("discord.js");

const customCard = (randomCard) => {
    const newCard = new EmbedBuilder()
    .setColor(0xFF9021)
    .setTitle(`${randomCard.name}`)
    .setAuthor({ name: 'Made by -> ~DireWolf', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' })
    .setDescription("The remnants of a fallen viking bent to destroy all he blames seeking vengeance") //description
    .setThumbnail('https://wallpapercave.com/wp/wp10426807.jpg')
    .setImage("https://i.postimg.cc/YCRKNsSF/1681752972290.jpg") //image
    .addFields(
      { name: '**TYPE**:', value: `${randomCard.class}`, inline: true},
      { name: '**DOL**:', value: `${randomCard.DOL}`, inline: true },
      { name: '**Dream Factor**:', value: `${randomCard.dreamFactor}`, inline: true},
      { name: '\u200B', value: '\u200B' },
    )
    .setTimestamp()
    .setFooter({ text: 'Evening, Bookworm...', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' });

    return newCard;
}

module.exports = {customCard};
