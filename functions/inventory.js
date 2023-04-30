const {EmbedBuilder} = require("discord.js");

const inventory = (cards) => { 
    // const cardNames = cards.map(function(item) {
    //     return item['name'];
    //   });
  const newCard =  new EmbedBuilder()
  .setColor(0xFFFFFF)
  .setTitle("Inventory")
  .setAuthor({ name: 'Made by -> ~DireWolf', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' })
  .setThumbnail("https://wallpapercave.com/wp/wp10426807.jpg")
  .addFields(
    { name: "All your Cards are here", value: "See what cards you can use." },
    { name: "\u200B", value: "\u200B" }
  )
  .addFields(
    cards.map((card,index) => ({name: `${index+1} --> ${card.name}`, value: card.class,}))
  )
  .setTimestamp()
  .setFooter({
    text: "Marketplace",
    iconURL:
      "https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg",
  });
  return newCard;
}

module.exports = {inventory};





// const {EmbedBuilder} = require("discord.js");

// const customCard = (randomCard) => {
//     const newCard = new EmbedBuilder()
//     .setColor(0xFF9021)
//     .setTitle(`${randomCard[0].name}`)
//     .setAuthor({ name: 'Made by -> ~DireWolf', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' })
//     .setDescription("The remnants of a fallen viking bent to destroy all he blames seeking vengeance")
//     .setThumbnail('https://wallpapercave.com/wp/wp10426807.jpg')
//     .setImage("https://i.postimg.cc/YCRKNsSF/1681752972290.jpg")
//     .addFields(
//       { name: '**TYPE**:', value: `sss`, inline: true},
//       { name: '**DOL**:', value: `sss`, inline: true },
//       { name: '**Dream Factor**:', value: `sss`, inline: true},
//       { name: '\u200B', value: '\u200B' },
//     )
//     .setTimestamp()
//     .setFooter({ text: 'Evening, Bookworm...', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' });

//     return newCard;
// }

// module.exports = {customCard};
