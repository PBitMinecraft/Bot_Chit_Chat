const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login('MTI3MTE1NDI4MzExMDQ2NTU5Ng.Gv3zE0.f1rtfcZCBxEo3TtAfs0HSb8wl_jJDZ06UyfjGc');

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
