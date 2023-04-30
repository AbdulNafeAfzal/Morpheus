require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');
const { Pagination } = require('pagination.djs');
const { enroll, Register } = require('../functions/enroll');
const mongoose = require('mongoose');

//importing models from database
const user = require('../models/user_data');
const card = require('../models/cards_data');
const { customCard } = require('../functions/customCard');

//importing functions ie embeds
const { dreamers_guide, button } = require('../functions/dreamers_guide')
const { CHILLGARD, TUNDRAMADOS, FREJLORD, EREYAS, CLARA_OCULUS, GALADHOR, GOULRICHT_KEEP, BRACKHILL_FORT, BLACKMOURE_IGNES, GRIMPASS_KEEP, SHADOWFELL_MANOR, CATACOMBS_OF_GASHNAKH, AERENDEL, CASTLE_HYCROFT, CASTLE_OF_THE_AESIRS, STORMWIND_PASS, CARADHRAS_MARE, DRIFTMAW } = require('../functions/biomes');
const { NIVEN_FIREBORN, SIR_GALAHAD, KING_LEONIDAS, URSA_MAJOR, CAPTAIN_GILLSBANE, AURELIUS_DIVINEHEART, BOFUR_IRONBEARD, JOTNAR_WINTERFURY, QUEEN_BRYNHILDR, CELEBORN_ELENSARION } = require("../functions/avatars")
const allAvatars = { NIVEN_FIREBORN, SIR_GALAHAD, KING_LEONIDAS, URSA_MAJOR, CAPTAIN_GILLSBANE, AURELIUS_DIVINEHEART, BOFUR_IRONBEARD, JOTNAR_WINTERFURY, QUEEN_BRYNHILDR, CELEBORN_ELENSARION };
const allBiomes = { CHILLGARD, TUNDRAMADOS, FREJLORD, EREYAS, CLARA_OCULUS, GALADHOR, GOULRICHT_KEEP, BRACKHILL_FORT, BLACKMOURE_IGNES, GRIMPASS_KEEP, SHADOWFELL_MANOR, CATACOMBS_OF_GASHNAKH, AERENDEL, CASTLE_HYCROFT, CASTLE_OF_THE_AESIRS, STORMWIND_PASS, CARADHRAS_MARE, DRIFTMAW };
const { shop, starter_pack_button } = require('../functions/shop');
const { customProfile } = require('../functions/userProfile');
// const { inventory } = require('../functions/inventory');
const {inventory} = require('../functions/inventory');


const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

client.on('ready', (c) => {
  console.log(`✅ your bot named ${c.user.tag} is ready`);
  client.user.setActivity({
    name: '/The Sandman',
    type: ActivityType.Playing
  })
});










//--------------------------------   COMMANDS HERE   ------------------------------------------//

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  const userExist = await user.findOne({ userId: interaction.user.id });
  if (interaction.commandName == "enroll") {
    if (!userExist) {
      await interaction.reply({ embeds: [enroll], components: [Register] });
      return;
    }
    else {
      interaction.reply("You are already registered!");
      return;
    }
  }
  if (!userExist) {
    interaction.reply("Please Register first to use this command!");
    return;
  }
  switch (interaction.commandName) {
    case 'biome-details':
      const biomeArray = [CHILLGARD, TUNDRAMADOS, FREJLORD, EREYAS, CLARA_OCULUS, GALADHOR, GOULRICHT_KEEP, BRACKHILL_FORT, BLACKMOURE_IGNES, GRIMPASS_KEEP, SHADOWFELL_MANOR, CATACOMBS_OF_GASHNAKH, AERENDEL, CASTLE_HYCROFT, CASTLE_OF_THE_AESIRS, STORMWIND_PASS, CARADHRAS_MARE, DRIFTMAW]
      const biomes = new Pagination(interaction);
      biomes.setEmbeds(biomeArray);
      await biomes.render();
      break;
    case 'avatar-details':
      const avatarArray = [NIVEN_FIREBORN, SIR_GALAHAD, KING_LEONIDAS, URSA_MAJOR, CAPTAIN_GILLSBANE, AURELIUS_DIVINEHEART, BOFUR_IRONBEARD, JOTNAR_WINTERFURY, QUEEN_BRYNHILDR, CELEBORN_ELENSARION]
      const avatars = new Pagination(interaction);
      avatars.setEmbeds(avatarArray);
      await avatars.render();
      break;
    case 'dreamers-guide':
      await interaction.reply({ embeds: [dreamers_guide], components: [button] })
      break;
    case 'card_details':
      await interaction.reply({ embeds: [card_details] })
      break;
    case 'biome-selector':
      const biome = interaction.options.get('select-biome').value
      userExist.biome = biome;
      userExist.save();
      const selectedBiome = await userExist.biome
      console.log(selectedBiome)
      await interaction.reply({ embeds: [allBiomes[selectedBiome]] });
      await interaction.editReply("**YOU HAVE SUCCESSFULLY ACQUIRED THIS BIOME!**");
      break;
    case 'avatar-selector':
      const avatar = interaction.options.get('select-avatar').value
      userExist.avatar = avatar;
      userExist.save();
      const selectedAvatar = await userExist.avatar
      await interaction.reply({ embeds: [allAvatars[selectedAvatar]] });
      await interaction.editReply("**YOU HAVE SUCCESSFULLY ACQUIRED THIS AVATAR!**");
      break;
    case 'shop':
      await interaction.reply({ embeds: [shop], components: [starter_pack_button] });
      break;
    case 'profile-view':
      await interaction.reply({ embeds: [customProfile(userExist)] });
      break;
    case 'inventory':
      const userCardIds = userExist.cards;
      let userCards = [];
      for (i = 0; i < userCardIds.length; i++) {
        const foundCard = await card.findOne({ _id: userCardIds[i]._id });
        userCards.push(foundCard);
      }
      // console.log(userCards);
      const finalInventory = inventory(userCards);
      console.log(finalInventory);
      await interaction.reply({embeds : [finalInventory]});
      // await interaction.reply("This is inventory");
      // await interaction.reply(htmlToPng("john"));
      break;
    default:
      await interaction.reply("Please Check your command");
      break;
  }
});










//-------------------------------------   BUTTONS HERE   --------------------------------//

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;
  const userExist = await user.findOne({ userId: interaction.user.id });
  if (interaction.customId == "register") {
    if (!userExist) {
      const newUser = await new user({ userId: interaction.user.id, userName: interaction.user.username });
      newUser.save();
      await interaction.reply(`You are successfully registered ${interaction.user.username}`);
      return;
    }
    else {
      interaction.reply("You are already registered!");
      return;
    }
  }
  switch (interaction.customId) {
    case 'button':
      await interaction.reply("This button was clicked");
      break;
    case 'starter':
      const allCards = await card.find({});
      console.log(allCards);
      const randomCard = await card.aggregate([
        { $match: {} },
        { $sample: { size: 1 } },
      ]).exec();
      const newCard = customCard(randomCard[0]);
      userExist.cards.push(randomCard[0]._id);
      userExist.save();
      await interaction.reply({ embeds: [newCard] });
      break;
    default:
      await interaction.reply("Please Check your command");
      break;
  }
});










//Bot login and database connection
(async () => {
  try {
    await mongoose.connect(process.env.MONGO_PASS, { keepAlive: true });
    console.log("Connected to Database");
    client.login(process.env.TOKEN);

  } catch (error) {
    console.log(`Error is ${error}`)
  }
})();