const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/fetch', async (req, res) => {
  const targetUrl = req.query.url;

  if (!targetUrl) return res.status(400).send("Missing 'url' parameter");

  try {
    const response = await axios.get(targetUrl, { timeout: 10000 });
    res.send(response.data);
  } catch (err) {
    res.status(500).send("Error fetching URL: " + err.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
