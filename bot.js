const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Loly_choco.aternos.me',
  port: 55724,
  username: 'AFK_BOT_1', // تقدر تغير الاسم
  version: '1.21.92.1'
});

bot.on('spawn', () => {
  console.log('✅ البوت دخل السيرفر!');
  bot.chat('تم تشغيل AFK BOT بنجاح!');
});

bot.on('error', err => console.log('❌ خطأ:', err));
bot.on('end', () => console.log('🔁 تم فصل البوت، يعيد الاتصال...'));
