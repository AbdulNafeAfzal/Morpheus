const {EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

const shop = new EmbedBuilder()
  .setColor(0xFFFFFF)
  .setTitle("Shop")
  .setAuthor({ name: 'Made by -> ~DireWolf', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' })
  .setThumbnail("https://wallpapercave.com/wp/wp10426807.jpg")
  .addFields(
    { name: "Starter pack", value: "Buy this to get a random starter card" },
    { name: "\u200B", value: "\u200B" }
  )
  .setTimestamp()
  .setFooter({
    text: "Marketplace",
    iconURL:
      "https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg",
  });

  const starter_pack_button = new ActionRowBuilder()
  .addComponents(
   new ButtonBuilder()
  .setCustomId('starter')
  .setLabel('Starter Pack')
  .setStyle(ButtonStyle.Primary)
  );

module.exports = {shop, starter_pack_button}