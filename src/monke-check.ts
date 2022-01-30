import { Message } from 'discord.js';

const MONKE_RE = /([^a-zA-Z]|^)monkey([^a-zA-Z]|$)/;

export const monkeListener = (message: Message<boolean>) => {
    if (MONKE_RE.test(message.content.toLowerCase())) {
        message.channel.send('*monke');
    }
}
