# Ticket Bot

A discord ticket bot with buttons & slash commands
- Made in Discord.js v13

## Installation

You need to have Node.JS 16+

```bash
git clone # Ticket Bot

A discord ticket bot with buttons & slash commands
- Made in Discord.js v13

## Installation

You need to have Node.JS 16+

``````bash
git clone https://github.com/HarshitKumar9030/Ucskm.tech-V3
npm i
``````

## Configuraton

```json
//config.json
{
  "clientId": "your-bot-client-id",
  "guildId": "your-discord-server-id",


  "parentOpened": "The category in which ticket is going to open",
  "parentPayment": "The category in which the payment ticket category is going to open",
  "parentSupport": "The category in which the Support ticket category is going to open",
  "parentOther": "The category in which the Other ticket category is going to open",


  "roleSupport": "your-support-role",

  
  "logsTicket": "ticket-logs-channel",
  "ticketChannel": "your-main-ticket-channel",

  "footerText": "Ucskm.tech"
}
```

+ You can change category emojis in `intractionCreate.js` @ line 50.
+ Make sure the `ticketChannel` is empty.

## Deployment
```bash
node deploy-commands.js # To deploy slash commands in all the servers the bot is in
node index.js # To start the ticket-bot
```

# Made with 💜 by HarshitKumar.
 Code Inspired From [@Sayrix](https://github.com/Sayrix)
