import axios from 'axios'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let cop = 'Jika tiktokmp3nya Berbentuk Video Ubah Aja Ke mp3,Dengan Cara Replay tiktokmp3 Yang Berbentuk Video,Kemudin Ketik .tomp3\n\nLink Esceh:https://youtube.com/channel/UC_kZ0QiOmykIPGMbfTcErJw\n'
    let res = (await axios.get(API('males', '/tiktok', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
 conn.reply(m.chat, `${wait}`, m)   
await conn.sendFile(m.chat, res.videoWM, 'tiktok.mp3', cop, m, { mentions: [m.sender], mimetype: 'audio/mp3', asDocument: db.data.chats[m.chat].useDocument })
}
handler.command = /^(tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|tiktokaudio|tta)$/i

export default handler