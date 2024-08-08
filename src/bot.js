const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login('MTI3MTExMzc5Nzc4NDA0MzYyMA.Ge_w4q.WvWpJ6-lFe7ANwRSwS7m5UZ40wJhWtrCgK-B8w');

app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    let reply;
    if (message.toLowerCase() === 'ping') {
        reply = 'Pong!';
    } else {
        reply = `You said: ${message}`;
    }

    res.json({ reply });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
