import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
for (let id of chatsall) { 
conn.sendButton(id, `┌──「𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 | 𝙉𝙊𝙏𝙄𝘾𝙀」─\n├❏💌* ${text}\n*\n└────ׂ─ׂ─ׂ─ׂ───`, '✅ *𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🎁 𝙄𝙣𝙛𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡', '.cuentasgb'],['𝐌𝐄𝐍𝐔', '.menu']], false, {
contextInfo: { externalAdReply: {
title: '❍͜͡➣CHICA_𝐁𝐎𝐓❍͜͡➣|CALABERA ',
body: 'Super Bot WhatsApp', 
sourceUrl: `https://www.youtube.com/@informaticsecurity5309`, 
thumbnail: fs.readFileSync('./src/admins.jpg') }}})}
m.reply(`${iig} ✅ *El mensaje fue enviado a ${chatsall.length} Chats Totales*\n*Es posible que no se haya enviado a todos los Chats Totales. Disculpe.*\n\n✅ *The message was sent to ${chatsall.length} Totals Chats*\n*May not have been sent to all Totals Chats. Excuse me.*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicar|comunicado|broadcastall|bc)$/i
handler.rowner = true
handler.limit = 1
handler.register = true
handler.exp = 500
export default handler
