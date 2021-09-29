const express = require('express');
const webPush = require('web-push');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

// Set static path
app.use(express.static(path.join(__dirname, 'client')));

app.use(express.json());

const publicVapidKey =
  'BEB7MJzspwAGhey--xJct2jf-75p-T_mq5PXQ7-qoac4L_3gPOIujEzLIHd5shFlf_euoO4W1HwXeme4p4ON02A';
const privateVapidKey = '0VJcnlGkRgbTts7iZFKfiFSJ8m2Xc5EMchtvXznd8Lg';

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
