const {StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder} = require('discord.js');
const user = require('../models/user_data');
const card = require('../models/cards_data');


const teamRemoveMenu = async(interaction) => {
    const userId = interaction.user.id;
    const userData = await user.findOne({userId: userId});
    // const userCardIds = userData.cards;
    const teamCardIds = userData.team;
    // let userCards = [];
    //   for (i = 0; i < userCardIds.length; i++) {
    //     const foundCard = await card.findOne({ _id: userCardIds[i]._id });
    //     userCards.push(foundCard);
    //   }
      let teamCards = [];
      for (i = 0; i < teamCardIds.length; i++) {
        const foundCard = await card.findOne({ _id: teamCardIds[i]._id });
        teamCards.push(foundCard);
      }
    //   const common = userCards.filter(obj1 => teamCards.some(obj2 => obj1._id === obj2._id));
    //   const finalCards = userCards.filter(obj1 => !common.some(obj2 => obj1._id === obj2._id ));

      const select = new StringSelectMenuBuilder()
    .setCustomId('remove-team')
    .setPlaceholder('Select a card to remove')
    .addOptions(
        teamCards.map((card) => (
            new StringSelectMenuOptionBuilder()
            .setLabel(`${card.name}`)
            .setDescription(`${card.class}`)
            .setValue(`${card._id} ${card.name}`)
        ))
    );

    const row = new ActionRowBuilder()
			.addComponents(select);

		await interaction.reply({
			content: 'Select menu',
			components: [row],
		});
}

module.exports = {teamRemoveMenu}