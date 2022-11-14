import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, generateWAMessageFromContent, }) => {
    let { isBanned, welcome, detect, sWelcome, sBye, anticall, nsfw, premnsfw, autoresponder, viewonce, autoread, restrict, useDocument, stiker, autolevelup, whitelistmycontacts, self, premnsfwchat, document, autosticker, getmsg, nyimak, swonly, pconly, gconly, sPromote, sDemote, antiLinkTik, antiLinkTel, antiLinkIg, antiLinkHttp, antiLinkYt, antiLinkFb, antiVirtex, antiToxic, antiLinkGc, antiStiker, antiSpam, del } = global.db.data.settings[conn.user.jid]
    const chats = Object.keys(await conn.chats)
    const groups = Object.keys(await conn.groupFetchAllParticipating())
    const block = await conn.fetchBlocklist()
    const fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6282127487538-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Halo", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
               }
           }
       }
       let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let sts = `┌────〔 Status 〕───⬣
│✧  Aktif selama ${uptime}
│✧  *${groups.length}* Grup
│✧  *${chats.length - groups.length}* Chat Pribadi
│✧  *${Object.keys(global.db.data.users).length}* Pengguna
│✧  ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}
│✧  *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
│✧  *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
╰────────────⬣

┌───〔 Pengaturan 〕───⬣
│✧  banned ${isBanned ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  welcome ${welcome ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  detect ${detect ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  antidelete ${del ? '❪𝗢𝗙𝗙❫' : '❪𝗢𝗡❫'} 
│✧  antivirtex ${antiVirtex ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  antistiker ${antiStiker ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  antispam ${antiSpam ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  antitoxic ${antiToxic ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  antilinkgc ${antiLinkGc ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  antilinktik ${antiLinkTik ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  antilinktel ${antiLinkTel ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  antilinkyt ${antiLinkYt ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  antilinkhttp ${antiLinkHttp ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  antilinkig ${antiLinkIg ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  antilinkfb ${antiLinkFb ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  anticall ${anticall ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  autosticker ${stiker ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}  
│✧  autolevelup ${autolevelup ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} ⮕  
│✧  autoread ${autoread ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}  
│✧  document ${useDocument ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}  
│✧  detect ${detect ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  autoresponder ${autoresponder ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  nsfw ${nsfw ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  getmsg ${getmsg ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}  
│✧  premnsfw ${premnsfw ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} 
│✧  gconly ${gconly ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}⮕ 
│✧  nyimak ${nyimak ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'} ⮕ 
│✧  pconly ${pconly ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}⮕ 
│✧  ${status} ${self ? '❪𝗢𝗙𝗙❫' : '❪𝗢𝗡❫'}⮕ 
│✧  restrict ${restrict ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}⮕  
│✧  swonly ${swonly ? '❪𝗢𝗡❫' : '❪𝗢𝗙𝗙❫'}⮕  
╰────────────⬣`

conn.sendButtonDoc(m.chat, '*BOT STATUS*', sts, 'Owner', '.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: syt,
    mediaType: 2, 
    description: syt,
    title: gcname,
    body: bottime,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: syt
     }}
  })

}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
