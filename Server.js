const express = require('express');
const ivasRouter = require('./ivas-router');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/ivasms', ivasRouter);

app.get('/', (req, res) => {
  res.json({
    status: 'IVAS API Running on Pterodactyl!',
    endpoints: {
      'GET /api/ivasms?type=numbers': 'Get numbers',
      'GET /api/ivasms?type=sms': 'Get SMS',
      'GET /api/ivasms/status': 'Check session'
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});