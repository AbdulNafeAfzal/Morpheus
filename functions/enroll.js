const {EmbedBuilder} = require('discord.js')
const {ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

const enroll = new EmbedBuilder()
        .setColor(0xFF9021)
        .setTitle('LORD MORPHEUS')
        .setAuthor({ name: 'Made by -> ~DireWolf', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' })
        .setDescription("We begin, in the waking world,.. Which humanity insists on calling the real world,.. as if your dreams have no effect upon the choices you make.\n You mortals go about your work, your loves, your wars, as if your waking lives are all that matter. \n But there is another life which awaits you when you close your eyes,.. and enter **my realm**. \n **For I am the KING of DREAMS... and NIGHTMARES.** \n When the waking world leaves you wanting and weary, sleep brings you here, to find freedom and adventure.To face your fears and fantasies in **Dreams** and **Nightmares** that I create... and which I must control,.. lest they consume and destroy you. That is my purpose and my function. \n\n You are one amongst the many dreamers that visit my realm in your sleep, I **LORD MORPHEUS** welcome you as my student, to build your dream world and thrive amonsgt millions. For I have the power to make your Dreams come true,.. and Nightmares alike.\n Choose your **CASTLE** and **AVATAR** with haste, for then I shall teach you the secrets of my Realm")
        .setThumbnail('https://wallpapercave.com/wp/wp10426807.jpg')
        .addFields(
          { name: '**GUIDELINES**:-', value: '1. Use the /biome-selector command to select a Castle of your choosing. \n 2. Then, use the /avatar-selector command to select an Avatar of your choosing. \n 3. \n 4. Use the /dreamers-guide command to learn more about the game mechanics' },
          { name: '\u200B', value: '\u200B' },
        )
        .setImage('https://cdn.mos.cms.futurecdn.net/xsTsW6cgxbUWTn4HK9x6Me.jpg')
        .setTimestamp()
        .setFooter({ text: 'Go to SLeep', iconURL: 'https://images4.fanpop.com/image/photos/22100000/The-letter-the-alphabet-22187339-2560-2560.jpg' });

const Register = new ActionRowBuilder()
  .addComponents(
   new ButtonBuilder()
  .setCustomId('register')
  .setLabel('Click here to register')
  .setStyle(ButtonStyle.Success)
  );

module.exports = {enroll, Register};