let handler = async (m, { conn, isPublic, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'

    const { isBanned, welcome, detect, sWelcome, sBye, anticall, nsfw, premnsfw, autoresponder, viewonce, autoread, restrict, useDocument, stiker, autolevelup, whitelistmycontacts, self, premnsfwchat, document, autosticker, getmsg, nyimak, swonly, pconly, gconly, sPromote, sDemote, antiLinkTik, antiLinkTel, antiLinkIg, antiLinkHttp, antiLinkYt, antiLinkFb, antiVirtex, antiToxic, antiLinkGc, antiStiker, antiSpam, del } = global.db.data.chats[m.chat]
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `*ใ Group Information ใ*\n
*ID:* 
${groupMetadata.id}
*Name:* 
${groupMetadata.subject}
*Description:* 
${groupMetadata.desc?.toString() || 'unknown'}
*Total Members:*
${participants.length} Members
*Group Owner:* 
@${owner.split('@')[0]}
*Group Admins:*
${listAdmin}
*Group Settings:*
 
banned ${isBanned ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
welcome ${welcome ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
detect ${detect ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
antidelete ${del ? 'โช๐ข๐๐โซ' : 'โช๐ข๐กโซ'} 
antivirtex ${antiVirtex ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
antistiker ${antiStiker ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
antispam ${antiSpam ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
antitoxic ${antiToxic ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
antilinkgc ${antiLinkGc ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
antilinktik ${antiLinkTik ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
antilinktel ${antiLinkTel ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
antilinkyt ${antiLinkYt ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
antilinkhttp ${antiLinkHttp ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
antilinkig ${antiLinkIg ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
antilinkfb ${antiLinkFb ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
anticall ${anticall ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
autosticker ${stiker ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'}  
autolevelup ${autolevelup ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} โฎย? 
autoread ${autoread ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'}  
document ${useDocument ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'}  
detect ${detect ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
autoresponder ${autoresponder ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
nsfw ${nsfw ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
getmsg ${getmsg ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'}  
premnsfw ${premnsfw ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} 
gconly ${gconly ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'}โฎย?
nyimak ${nyimak ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'} โฎ 
pconly ${pconly ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'}โฎย?
${status} ${self ? 'โช๐ข๐๐โซ' : 'โช๐ข๐กโซ'}โฎย?
restrict ${restrict ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'}โฎย? 
swonly ${swonly ? 'โช๐ข๐กโซ' : 'โช๐ข๐๐โซ'}โฎย? 

*Message Settings:*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc)|igc|gci|gcid|idgc)$/i

handler.group = true

export default handler