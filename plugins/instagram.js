const { instagram, story, bot, getBuffer } = require('../lib/')

bot(
	{
		pattern: 'insta ?(.*)',
		fromMe: true,
		desc: 'Download Instagram Posts',
		type: 'download',
	},
	async (message, match) => {
		match = match || message.reply_message.text
		if (!match) return await message.sendMessage('_Example : insta url_')
		const result = await instagram(match)
		if (!result.length)
			return await message.sendMessage('*Not found*', {
				quoted: message.quoted,
			})
		for (const url of result) {
			await message.sendFromUrl(url)
		}
	}
)

bot(
	{
		pattern: 'story ?(.*)',
		fromMe: true,
		desc: 'Download Instagram stories',
		type: 'download',
	},
	async (message, match) => {
		match = match || message.reply_message.text
		if (!match) return await message.sendMessage('_Example : story username_')
		const result = await story(match)
		if (!result.length)
			return await message.sendMessage('*Not found*', {
				quoted: message.quoted,
			})
		for (const url of result) {
			await message.sendFromUrl(url)
		}
	}
)
