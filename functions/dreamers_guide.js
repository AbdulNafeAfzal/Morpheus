const {EmbedBuilder} = require('discord.js')
const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

const dreamers_guide = new EmbedBuilder()
        .setColor(0xFF9021)
        .setTitle('Welcome to the **Dreamers-Guide**')
        .setAuthor({ name: 'Made by -> ~DireWolf', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' })
        .setDescription("*Your one stop shop for all things Sandman!!* \n\n ")
        .setThumbnail('https://wallpapercave.com/wp/wp10426807.jpg')
        .addFields(
          { name: '**NOTE**:-', value: '*If you have any suggestions, please feel free to contact(DM) @DireWolf and share the same.*' },
          { name: '\u200B', value: '\u200B' },
        )
        .setTimestamp()
        .setFooter({ text: 'Evening, Bookworm...', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' });     
        
const card_info = new ActionRowBuilder()
  .addComponents(
   new ButtonBuilder()
  .setCustomId('card_info')
  .setLabel('Card Information')
  .setStyle(ButtonStyle.Primary)
  );
        
module.exports = {dreamers_guide, card_info};