const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("Streamstatus by Heasson");

  client.user
    .setActivity(
      `🇩​🇪​🇻​🇪​🇱​🇴​🇵​🇵​🇪​🇩​ 🇧​🇾​ 🇭​🇪​🇦​🇸​🇸​🇴​🇳​`,
      {
        type: "STREAMING",
        url: "https://www.twitch.tv/heasson1337"
      }
    )
    .then(presence =>
      console.log(
        `Your Status has been set to  ${
          presence.game ? presence.game.none : "none"
        }`
      )
    )
    .catch(console.error);
});

client.login("Njg5ODk5MDkzNTE4MDU3NDc3.XnP1ag.U-XuIZqK4tS4-T_49f65HyI9-ZU");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("Streamstatus by Heasson");

  client.user
    .setActivity(
      `🇩​🇪​🇻​🇪​🇱​🇴​🇵​🇵​🇪​🇩​ 🇧​🇾​ 🇭​🇪​🇦​🇸​🇸​🇴​🇳​`,
      {
        type: "STREAMING",
        url: "https://www.twitch.tv/heasson1337"
      }
    )
    .then(presence =>
      console.log(
        `Your Status has been set to  ${
          presence.game ? presence.game.none : "none"
        }`
      )
    )
    .catch(console.error);
});

client.login("Njg5OTAzNTQ5MTYwNzUxMTM3.XnP84w.r6gLYFeq_kr_KWRT7D99XqZieeA");
