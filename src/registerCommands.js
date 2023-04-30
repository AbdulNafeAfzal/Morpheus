const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');
require('dotenv').config();

const commands = [
  {
    name: 'enroll',
    description: "Log in with the game"
  },
  {
    name: 'biome-details',
    description: "Lord Morpheus tells you to select your world!"
  },
  {
    name: 'avatar-details',
    description: "Lord Morpheus tells you to select your Avatar!"
  },
  {
    name: 'dreamers-guide',
    description: "All in one guide to the Dream Realm!"
  },
  {
    name: 'card_details',
    description: "Shows card details"
  },
  {
    name: 'shop',
    description: 'Get your cards!'
  },
  {
    name: 'profile-view',
    description: 'See Your Profile Stats'
  },
  {
    name: 'biome-selector',
    description: "Select a biome of your choice!",
    options: [
      {
          name: 'select-biome',
          description: 'Select your biome',
          type: ApplicationCommandOptionType.String,
          required: true,
          choices: [
            {
              name: 'CHILLGARD',
              value: 'CHILLGARD'
            },
            {
              name: 'TUNDRAMADOS',
              value: 'TUNDRAMADOS'
            },
            {
              name: 'FREJLORD',
              value: 'FREJLORD'
            },
            {
              name: 'EREYAS',
              value: 'EREYAS'
            },
            {
              name: 'CLARA OCULUS',
              value: 'CLARA_OCULUS'
            },
            {
              name: 'GALADHOR',
              value: 'GALADHOR'
            },
            {
              name: "GOULRICHT' KEEP",
              value: "GOULRICHT_KEEP"
            },
            {
              name: 'BRACKHILL FORT',
              value: 'BRACKHILL_FORT'
            },
            {
              name: 'BLACKMOURE IGNES',
              value: 'BLACKMOURE_IGNES'
            },
            {
              name: 'GRIMPASS KEEP',
              value: 'GRIMPASS_KEEP'
            },
            {
              name: 'SHADOWFELL MANOR',
              value: 'SHADOWFELL_MANOR'
            },
            {
              name: 'CATACOMBS OF GASHNAKH',
              value: 'CATACOMBS_OF_GASHNAKH'
            },
            {
              name: 'AERENDEL',
              value: 'AERENDEL'
            },
            {
              name: 'CASTLE HYCROFT',
              value: 'CASTLE_HYCROFT'
            },
            {
              name: 'CASTLE OF THE AESIRS',
              value: 'CASTLE_OF_THE_AESIRS'
            },
            {
              name: 'STORMWIND PASS',
              value: 'STORMWIND_PASS'
            },
            {
              name: "CARADHRAS MARE",
              value: 'CARADHRAS_MARE'
            },
            {
              name: 'DRIFTMAW',
              value: 'DRIFTMAW'
            },
          ],
          
      }
    ],
  },
  {
    name: 'avatar-selector',
    description: "Select an avatar of your choice!",
    options: [
      {
          name: 'select-avatar',
          description: 'Select your avatar',
          type: ApplicationCommandOptionType.String,
          required: true,
          choices: [
            {
              name: 'NIVEN FIREBORN',
              value: 'NIVEN_FIREBORN'
            },
            {
              name: 'SIR GALAHAD',
              value: 'SIR_GALAHAD'
            },
            {
              name: 'KING LEONIDAS',
              value: 'KING_LEONIDAS'
            },
            {
              name: 'URSA MAJOR',
              value: 'URSA_MAJOR'
            },
            {
              name: 'CAPTAIN GILLSBAN',
              value: 'CAPTAIN_GILLSBAN'
            },
            {
              name: 'AURELIUS DIVINEHEART',
              value: 'AURELIUS_DIVINEHEART'
            },
            {
              name: "BOFUR IRONBEARD",
              value: 'BOFUR_IRONBEARD'
            },
            {
              name: 'JOTNAR WINTERFURY',
              value: 'JOTNAR_WINTERFURY'
            },
            {
              name: 'QUEEN BRYNHILDR',
              value: 'QUEEN_BRYNHILDR'
            },
            {
              name: 'CELEBORN ELENSARION',
              value: 'CELEBORN_ELENSARION'
            },
          ]
       }
     ]
   }
]; 

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();