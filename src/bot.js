const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login('MTI3MTE1NDI4MzExMDQ2NTU5Ng.GZyoEi.XfmR0jWHVve2fGt87Q3nQLWgvsjVZCySeOhf0I');

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
