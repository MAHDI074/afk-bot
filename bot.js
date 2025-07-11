iconst bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  host: 'Mahdi0742008.aternos.me',
  port: 12943,
  username: 'AFK_BOT_1',
  offline: true,
  version: '1.21.93' // ⬅️ أضف هذا السطر
});

client.on('join', () => {
  console.log('✅ البوت دخل السيرفر!');
});

client.on('disconnect', (packet) => {
  console.log('❌ تم فصل البوت:', packet);
});

client.on('error', (err) => {
  console.log('⚠️ حدث خطأ:', err);
});
