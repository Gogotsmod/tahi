import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = conn.getName(who)
	let imgr = flaaa2.getRandom()
	     conn.sendButton(m.chat, bottime, `
Hallo ${name},\n Silahkan Daftar Ke Database Terlebih Dahulu Untuk Menggunakan WannBotz-MD, Lebih Lanjut\n\n*𝗖𝗹𝗶𝗰𝗸 𝗕𝘂𝘁𝘁𝗼𝗻 𝗗𝗶𝗯𝗮𝘄𝗮𝗵*\n\n*𝗞𝗮𝗹𝗶𝗮𝗻 𝗕𝗶𝘀𝗮 𝗜𝗸𝘂𝘁𝗶 𝗟𝗮𝗻𝗴𝗸𝗮𝗵 𝗩𝗲𝗿𝗶𝗳𝘆 𝗦𝗲𝗹𝗮𝗻𝗷𝘂𝘁𝗻𝘆𝗮* \n\nCWO ATAU CWE?
 `, `${imgr + 'VERIFY'}`, [['CWO', '.reg2'],['CWE', '.reg2']],fliveLoc22)
 } 
 handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>') 
 handler.tags = ['xp'] 
  
 handler.command = /^(daftar|verify|reg(ister)?)$/i 
  
 export default handler