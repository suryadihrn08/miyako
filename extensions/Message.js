const { Structures } = require("discord.js");

module.exports = Structures.extend("Message", (Message) => class MiyakoMessage extends Message {

  async awaitReply(question, filter, limit = 60000, embed) {
    await this.channel.send(question, embed);

    return this.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] })
      .then(collected => collected.first().content)
      .catch(() => false);
  }
});
