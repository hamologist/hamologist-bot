import 'dotenv/config'
import { Client, Intents } from 'discord.js'
import { monkeListener } from './monke-check';
import { lulListener } from './lul-check';

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
    partials: ['CHANNEL']
});

client.login(process.env.DISCORD_TOKEN)
    .then(() => {
        console.log('Login Successful!');
    })
    .catch((reason) => {
        console.log(reason);
    });

client.once('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', monkeListener);
client.on('messageCreate', lulListener);
