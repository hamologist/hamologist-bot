import { Message } from 'discord.js';

const LUL_RE = /([^a-zA-Z]|^)lul([^a-zA-Z]|$)/;

export const lulListener = (message: Message<boolean>) => {
    if (LUL_RE.test(message.content.toLowerCase())) {
        message.channel.send('*lol');
    }
}
