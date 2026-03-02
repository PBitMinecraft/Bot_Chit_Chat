const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const token = process.env.DISCORD_BOT_TOKEN;
if (!token) {
    throw new Error('Missing DISCORD_BOT_TOKEN environment variable');
}

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token);

app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (typeof message !== 'string' || !message.trim()) {
        return res.status(400).json({ message: 'A non-empty string message is required' });
    }

    const normalizedMessage = message.trim();

    let reply;
    if (normalizedMessage.toLowerCase() === 'ping') {
        reply = 'Pong!';
    } else {
        reply = `You said: ${normalizedMessage}`;
    }

    res.json({ reply });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
