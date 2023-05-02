const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');


const Accept = new ActionRowBuilder()
  .addComponents(
   new ButtonBuilder()
  .setCustomId('accept')
  .setLabel('Accept')
  .setStyle(ButtonStyle.Primary)
  );


  const Reject = new ActionRowBuilder()
  .addComponents(
   new ButtonBuilder()
  .setCustomId('reject')
  .setLabel('Reject')
  .setStyle(ButtonStyle.Primary)
  );

module.exports = {Accept, Reject};