require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, Options, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const roles = [
    {
      id: '917397851535994921',
      label: 'Cavalier',
    },
    {
      id: '1016202133848211566',
      label: 'Thronebreaker',
    },
  ];

  client.on('ready', async (c) => {
    try {
      const channel = await client.channels.cache.get('914037483015127110');
      if (!channel) return;
  
      const row = new ActionRowBuilder();
  
      roles.forEach((role) => {
        row.components.push(
          new ButtonBuilder()
            .setCustomId(role.id)
            .setLabel(role.label)
            .setStyle(ButtonStyle.Primary)
        );
      });
  
      await channel.send({
        content: 'Claim or remove a role below.',
        components: [row],
      });
      process.exit();
    } catch (error) {
      console.log(error);
    }
  });

// client.on('ready', (c) => {
//   console.log(`✅ your bot named ${c.user.tag} is ready`);
// })

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  switch (interaction.commandName) {
    case 'enroll':
      const enroll = new EmbedBuilder()
        .setColor(0xFF9021)
        .setTitle('LORD MORPHEUS')
        // .setURL('https://discord.js.org/')
        .setAuthor({ name: 'Made by -> ~DireWolf', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' })
        .setDescription("Welcome Dreamer. I go by many names, some call me **THE DREAMING**, **KING OF DREAMS**, **DREAM KING**, but most call me **THE SANDMAN**. Let me properly introduce myself, I am **LORD MORPHEUS**, I am the Ruler of the Dream Realm. Yes, Dream Realm is the place you mortals come when you sleep. Enough with the formalities,let's set you up")
        .setThumbnail('https://wallpapercave.com/wp/wp10426807.jpg')
        .addFields(
          { name: 'Regular field title', value: 'Some value here' },
          { name: '\u200B', value: '\u200B' },
        )
        .setImage('https://cdn.mos.cms.futurecdn.net/xsTsW6cgxbUWTn4HK9x6Me.jpg')
        .setTimestamp()
        .setFooter({ text: 'Go to SLeep', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' });
      await interaction.reply({ embeds: [enroll] })
      break;
      // case 'display-buttons':
        // buttons();
    default:
      await interaction.reply("Please Check your command");
  }
});


client.login(process.env.TOKEN);




// let randomCard = {}

// const randomCard = db.cards.aggregate([{ $sample: { size: 1 } }]);
// const randomCard = card.aggregate([{ $sample: { size: 1 } }]);

// async function randomCardFinder(){
//     randomCard = await card.findOne({_id: "2"});
//     // randomCard = await card.aggregate([{ $sample: { size: 1 } }]);
//     console.log(randomCard)
// }
// ra


 // const userCardIds = userExist.cards;
      // let userCards = [];
      // for(i=0;i<userCardIds.length;i++){ //any updates?, found my way to work it, now need to make an embed to show usprofile ohk
      //  const foundCard = await card.findOne({_id : userCardIds[i]._id});
      //   userCards.push(foundCard);//Hope it works
      // }    
      //console.log(userCards);





// client.on('interactionCreate', async (interaction) => {
//   try {
//     if (!interaction.isButton()) return;
//     await interaction.deferReply({ ephemeral: true });

//     const role = interaction.guild.roles.cache.get(interaction.customId);
//     if (!role) {
//       interaction.editReply({
//         content: "I couldn't find that role",
//       });
//       return;
//     }

//     const hasRole = interaction.member.roles.cache.has(role.id);

//     if (hasRole) {
//       await interaction.member.roles.remove(role);
//       await interaction.editReply(`The role ${role} has been removed.`);
//       return;
//     }

//     await interaction.member.roles.add(role);
//     await interaction.editReply(`The role ${role} has been added.`);
//   } catch (error) {
//     console.log(error);
//   }

const pagination = new Pagination(interaction, {
  firstEmoji: "⏮",
  prevEmoji: "◀️",
  selectEmoji: "✅",
  nextEmoji: "▶️",
  lastEmoji: "⏭",
  limit: 5,
  idle: 5 * 60 * 1000,
  ephemeral: false,
  prevDescription: "",
  postDescription: "",
  attachments: [],
  buttonStyle: "SECONDARY",
  loop: false,
 });