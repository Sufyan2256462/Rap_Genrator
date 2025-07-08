require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files (index.html, etc.) from the current directory
app.use(express.static(__dirname));

// OpenRouter API key (keep this secure, do not expose to frontend)
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

app.post('/api/generate-rap', async (req, res) => {
    const { topic, language, tone } = req.body;
  if (!topic) {
    return res.status(400).json({ error: 'Topic is required.' });
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'mistralai/mixtral-8x7b-instruct',
        messages: [
          {
            role: 'system',
            content: `You are a talented rap artist and lyricist. Create original rap lyrics based on the given topic. The rap should be creative, rhythmic, and engaging. Make it in ${language || 'English'} language with a ${tone || 'energetic'} tone.`
          },
          {
            role: 'user',
            content: `Write a rap about: ${topic}. Language: ${language || 'English'}. Tone: ${tone || 'energetic'}.`
          }
        ],
        max_tokens: 500,
        temperature: 0.8
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3001',
          'X-Title': 'Rap Generator'
        }
      }
    );

    const rap = response.data.choices[0].message.content.trim();
    res.json({ rap });
  } catch (error) {
    console.error('OpenRouter API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate rap.' });
  }
});

// Fallback: serve index.html for any other GET request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});