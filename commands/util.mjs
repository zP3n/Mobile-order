import { ButtonBuilder, ButtonStyle, SlashCommandBuilder, Client } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("utils")
  .setDescription("チャンネル内メッセージの管理")
  .addStringOption(option =>
    option
      .setName('function')
      .setDescription('管理メニュー')
      .setRequired(true) //trueで必須、falseで任意
      .addChoices(
      	{name:'すべてクリア', value:'reset'}
      )
  )

export async function execute(interaction){
  let select = interaction.options.getString('function');
  if (select = "reset") {
    const channelId = interaction.channel_id;
    let channel = Client.channels.cache.get(channel).messages;
    for(let i = 0; i < 99; i++){
      channel.messages.fetch({ limit: 1 }).then(messages => {
        if (messages.size > 0) {
          var latestMessage = messages.first().id;
          var dl = latestMessage.delete();
        }
      })
    }
  }
}