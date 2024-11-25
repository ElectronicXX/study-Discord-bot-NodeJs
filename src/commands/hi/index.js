import {SlashCommandBuilder} from "discord.js"

export const command = new SlashCommandBuilder()
    .setName("hi")
    .setDescription("Hi command")


export const action = async (ctx) => {
    ctx.reply("Hi")
};