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

// Policy documents endpoint
app.get('/api/policy-documents', (req, res) => {
  // Simulate network delay
  setTimeout(() => {
    res.json([
      {
        id: "AFCABFD3-962E-4A78-B460-381DE6CC3A95",
        originalname: "Life Statement.pdf",
        docdate: "2025-09-11T00:00:00.000Z",
        mrd: "2032-09-11T00:00:00.000Z",
        size: "78109",
        uploadedon: "2025-09-11T00:01:58.987Z",
        uploadedby: "document-upload",
        tags: {
          policymanagingagent: "false",
          policyclient: "false",
          policyagent: "false",
          DateCreated: "09/11/2025",
          Source: "OIPA",
          policy: "00000703",
          DocumentName: "Life Statement",
          lifestatements: "09-11-2025",
        },
        mimetype: "image/png",
        location: [
          {
            container: "policies",
            directory: "00000703",
            blob: "00000703/1757548918976-Life Statement-20250911.pdf",
          },
          {
            container: "lifestatements",
            directory: "09-11-2025",
            blob: "09-11-2025/1757548918976-Life Statement-20250911.pdf",
          },
        ],
        filename: "1757548918976-Life Statement-20250911.pdf",
        deletedOn: null,
      },
      {
        id: "F9D138F5-91CE-426D-97E9-95180FDC0CE2",
        originalname: "Life Statement.pdf",
        docdate: "2025-09-25T00:00:00.000Z",
        mrd: "2032-09-25T00:00:00.000Z",
        size: "78109",
        uploadedon: "2025-09-25T00:05:50.993Z",
        uploadedby: "document-upload",
        tags: {
          policymanagingagent: "false",
          policyclient: "false",
          policyagent: "false",
          DateCreated: "09/24/2025",
          Source: "OIPA",
          policy: "00000703",
          DocumentName: "Life Statement",
          lifestatements: "09-24-2025",
        },
        mimetype: "image/png",
        location: [
          {
            container: "policies",
            directory: "00000703",
            blob: "00000703/1758758750961-Life Statement-20250925.pdf",
          },
          {
            container: "lifestatements",
            directory: "09-24-2025",
            blob: "09-24-2025/1758758750961-Life Statement-20250925.pdf",
          },
        ],
        filename: "1758758750961-Life Statement-20250925.pdf",
        deletedOn: null,
      },
      {
        id: "81C6B85B-8BA9-4D5D-A818-98B0A571F6CA",
        originalname: "Loan Interest Notice_Life.pdf",
        docdate: "2025-08-05T00:00:00.000Z",
        mrd: "2032-08-05T00:00:00.000Z",
        size: "115136",
        uploadedon: "2025-08-05T00:01:18.787Z",
        uploadedby: "document-upload",
        tags: {
          policymanagingagent: "false",
          policyclient: "false",
          policyagent: "false",
          DateCreated: "08/04/2025",
          billingnotices: "08-04-2025",
          Source: "OIPA",
          policy: "00000703",
          DocumentName: "Loan Interest Notice",
        },
        mimetype: "image/png",
        location: [
          {
            container: "billingnotices",
            directory: "08-04-2025",
            blob: "08-04-2025/1754352078038-Loan Interest Notice_Life-20250805.pdf",
          },
          {
            container: "policies",
            directory: "00000703",
            blob: "00000703/1754352078038-Loan Interest Notice_Life-20250805.pdf",
          },
        ],
        filename: "1754352078038-Loan Interest Notice_Life-20250805.pdf",
        deletedOn: null,
      },
      {
        id: "BFFFABA0-ADBA-4400-935D-DC13325F2F98",
        originalname: "Life Statement.pdf",
        docdate: "2025-09-02T00:00:00.000Z",
        mrd: "2032-09-02T00:00:00.000Z",
        size: "78196",
        uploadedon: "2025-09-02T00:02:52.777Z",
        uploadedby: "document-upload",
        tags: {
          policymanagingagent: "false",
          policyclient: "false",
          policyagent: "false",
          DateCreated: "09/02/2025",
          Source: "OIPA",
          policy: "00000703",
          DocumentName: "Life Statement",
          lifestatements: "09-02-2025",
        },
        mimetype: "image/png",
        location: [
          {
            container: "policies",
            directory: "00000703",
            blob: "00000703/1756771372769-Life Statement-20250902.pdf",
          },
          {
            container: "lifestatements",
            directory: "09-02-2025",
            blob: "09-02-2025/1756771372769-Life Statement-20250902.pdf",
          },
        ],
        filename: "1756771372769-Life Statement-20250902.pdf",
        deletedOn: null,
      },
      {
        id: "BFFFABA0-ADBA-4400-935D-DC13325F2F96",
        originalname: "Top Secret Premium Life Statement.pdf",
        docdate: "2025-09-04T00:00:00.000Z",
        mrd: "2032-09-04T00:00:00.000Z",
        size: "78196",
        uploadedon: "2025-09-04T00:02:52.777Z",
        uploadedby: "document-upload",
        premium: true,
        tags: {
          policymanagingagent: "false",
          policyclient: "false",
          policyagent: "false",
          DateCreated: "09/02/2025",
          Source: "OIPA",
          policy: "00000703",
          DocumentName: "Premium Top Secret Life Statement",
          lifestatements: "09-02-2025",
        },
        mimetype: "image/png",
        location: [
          {
            container: "policies",
            directory: "00000703",
            blob: "00000703/1756771372771-Life Statement-20250902.pdf",
          },
          {
            container: "lifestatements",
            directory: "09-02-2025",
            blob: "09-02-2025/1756771372771-Life Statement-20250902.pdf",
          },
        ],
        filename: "1756771372769-Life Statement-20250904.pdf",
        deletedOn: null,
      },
      {
        id: "BFFFABA0-ADBA-4400-935D-DC13325F2F99",
        originalname: "Top Secret Premium Life Statement2.pdf",
        docdate: "2025-09-05T00:00:00.000Z",
        mrd: "2032-09-05T00:00:00.000Z",
        size: "78196",
        uploadedon: "2025-09-05T00:02:52.777Z",
        uploadedby: "document-upload",
        premium: true,
        tags: {
          policymanagingagent: "false",
          policyclient: "false",
          policyagent: "false",
          DateCreated: "09/02/2025",
          Source: "OIPA",
          policy: "00000703",
          DocumentName: "Premium Top Secret Life Statement",
          lifestatements: "09-05-2025",
        },
        mimetype: "image/png",
        location: [
          {
            container: "policies",
            directory: "00000703",
            blob: "00000703/1756771372771-Life Statement-20250905.pdf",
          },
          {
            container: "lifestatements",
            directory: "09-05-2025",
            blob: "09-05-2025/1756771372771-Life Statement-20250905.pdf",
          },
        ],
        filename: "1756771372771-Life Statement-20250905.pdf",
        deletedOn: null,
      },
    ]);
  }, 300);
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
