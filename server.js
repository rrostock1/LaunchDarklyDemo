const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const fetch = (...args) => import('node-fetch').then(mod => mod.default(...args));
require('dotenv').config();

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Express backend is running!');
});

// Secure endpoint to update a LaunchDarkly feature flag
app.patch('/api/launchdarkly/update-flag', async (req, res) => {
  const { projectKey, flagKey, patchOps } = req.body;
  const apiToken = process.env.LAUNCHDARKLY_API_TOKEN;

  if (!apiToken) {
    return res.status(500).json({ error: 'LaunchDarkly API token not set in environment.' });
  }
  if (!projectKey || !flagKey || !Array.isArray(patchOps)) {
    return res.status(400).json({ error: 'Missing required fields: projectKey, flagKey, patchOps (array).' });
  }

  try {
    //const response = await fetch(`https://app.launchdarkly.com/api/v2/flags/${projectKey}/${flagKey}`,
    const response = await fetch(`https://app.launchdarkly.com/api/v2/flags/default/test-flag-1`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': apiToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(patchOps)
      }
    );
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update LaunchDarkly flag', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
