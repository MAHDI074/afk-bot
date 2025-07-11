const bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  host: 'Loly_choco.aternos.me',
  port: 55724,
  username: 'AFK_BOT_1', // أي اسم للبوت
  offline: true
});

client.on('join', () => {
  console.log('✅ البوت دخل السيرفر!');
});

client.on('disconnect', (packet) => {
  console.log('❌ تم فصل البوت:', packet);
});

client.on('error', (err) => {
  console.log('⚠️ حصل خطأ:', err);
});
