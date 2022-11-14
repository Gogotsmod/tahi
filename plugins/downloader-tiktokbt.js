import fetch from 'node-fetch'
let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    
                    let tiktok = 'https://telegra.ph/file/c9266a51bf203661182b0.jpg'
let anu2 = `    𝐓𝐢𝐤 𝐓𝐨𝐤 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫

Silahkan Pilih,Dengan Cara Klik Tombol Dibawah Ini\n\n\nLink Esceh:https://youtube.com/channel/UC_kZ0QiOmykIPGMbfTcErJw\n`
  conn.send2ButtonImg(m.chat, await(await fetch(tiktok)).buffer(), anu2, botdate, 'VIDEO', `${usedPrefix}tiktoknowm ${(args[0])}`, 'AUDIO', `${usedPrefix}ttmp3 ${(args[0])}`,)
 conn.reply(m.chat, `${wait}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok|tiktokdl|dltiktok|dltt|ttdl)$/i
handler.group = false
handler.register = false
handler.limit = true

handler.fail = null

export default handler