import 'dotenv/config'
import { Client, Intents } from 'discord.js'

const MONKE_RE = /([^a-zA-Z]|^)monkey([^a-zA-Z]|$)/;

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
    partials: ['CHANNEL']
});

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', (message) => {
    if (MONKE_RE.test(message.content.toLowerCase())) {
        message.channel.send('*monke');
    }
});

client.login(process.env.DISCORD_TOKEN)
    .then(() => {
        console.log('Login Successful!');
    })
    .catch((reason) => {
        console.log(reason);
    });
