const {EmbedBuilder} = require('discord.js')
const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

const dreamers_guide = new EmbedBuilder()
        .setColor(0xFF9021)
        .setTitle('Welcome to the **Dreamers-Guide**')
        .setAuthor({ name: 'Made by -> ~DireWolf', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' })
        .setDescription("**How to register with the game**:- \n -> Use the '/enroll' command to engage with Lord Morpheus and enroll yourselves into the dream realm. \n\n **How to select a Castle/Biome**:- \n -> Use the '/biome-selector' command to select a biome of your choosing. \n\n **How to select your Avatar**:- \n -> Use the '/avatar-selector' command to select an avatar of your choosing. \n\n **Card Stats**:- \n -> Coming soon...")
        .setThumbnail('https://wallpapercave.com/wp/wp10426807.jpg')
        .addFields(
          { name: '**NOTE**:-', value: '*If you have any suggestions, please feel free to contact(DM) @DireWolf and share the same.*' },
          { name: '\u200B', value: '\u200B' },
        )
        .setTimestamp()
        .setFooter({ text: 'Evening, Bookworm...', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' });     
        
const button = new ActionRowBuilder()
  .addComponents(
   new ButtonBuilder()
  .setCustomId('button')
  .setLabel('Click here')
  .setStyle(ButtonStyle.Primary)
  );
        
module.exports = {dreamers_guide, button};