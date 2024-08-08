const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.login(process.env.DISCORD_BOT_TOKEN);

let isBotReady = false;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    isBotReady = true;
});

export default async (req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Only POST requests are allowed' });
        return;
    }

    const { message } = req.body;

    if (!isBotReady) {
        return res.status(500).json({ message: 'Bot is not ready yet' });
    }

    let reply;
    if (message.toLowerCase() === 'ping') {
        reply = 'Pong!';
    } else {
        reply = `You said: ${message}`;
    }

    const channel = client.channels.cache.get('YOUR_DISCORD_CHANNEL_ID');
    if (channel) {
        await channel.send(message);
    }

    res.status(200).json({ reply });
};
