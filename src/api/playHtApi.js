const express = require('express');
const router = express.Router();
const config = require('../config.js');
const axios = require('axios');

router.post('/generateTTS', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.play.ht/api/v4/websocket-auth',
      {},
      {
        headers: {
          Authorization: `Bearer ${config.PLAYHT_SECRET_KEY}`,
          'X-User-Id': config.PLAYHT_USER_ID,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data); // Return the response from PlayHT API
  } catch (error) {
    console.error('Error generating TTS:', error);
    res.status(500).json({ error: 'Failed to generate speech' });
  }
});

module.exports = router;
