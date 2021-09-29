const express = require('express');
const webPush = require('web-push');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

// Set static path
app.use(express.static(path.join(__dirname, 'client')));

app.use(express.json());

const publicVapidKey = process.env.VAPID_PUBLIC_KEY;
const privateVapidKey = process.env.VAPID_PRIVATE_KEY;

webPush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

// subscribe route
app.post('/subscribe', (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // send 201 -resource create
  res.status(201).json({});

  // create payload
  const payload = JSON.stringify({ title: 'Push Notification Test' });

  // Pass Object into sendNotification
  webPush.sendNotification(subscription, payload).catch((err) => console.error(err));
});

const port = 5000;
app.listen(port, () => console.log(`listening on ${port}`));
