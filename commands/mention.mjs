import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('mention')
  .setDescription('Botがメンションします')
  .addStringOption(option =>
    option
      .setName('ガイシャ')
      .setDescription('「@kazato_96」のように被害者を指定してね')
      .setRequired(true)
  )

export async function execute(interaction){
  const unluck = interaction.options.getString('ガイシャ');
  if (!unluck.match(/^<@/)) {
    await interaction.reply({ content: 'ちゃんとメンションに使ってね', ephemeral: true });
    return;  
  }
	await interaction.reply(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
  await interaction.followUp(unluck)
}
