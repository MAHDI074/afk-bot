const bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  host: 'Loly_choco.aternos.me',
  port: 55724,
  username: 'AFK_BOT_1',
  offline: true,
  version: '1.21.90' // ⬅️ أضف هذا السطر
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

// ========== Express Server للبقاء شغالًا 24/7 ==========

const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("✅ البوت شغال 24/7!");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("🌐 سيرفر الويب يعمل للحفاظ على البوت شغال");
});
