console.log('Service Worker Loaded...');

self.addEventListener('push', (e) => {
  const data = e.data.json();
  console.log('Push Recieved...');
  self.registration.showNotification(data.title, {
    body: 'This is notified by the MAGNIT!!! Please subscribe to our newsletter',
    icon: 'https://s3.ap-southeast-2.amazonaws.com/cdn.tezdealz.com/bf1c1bb1-f312-4368-af78-d4254ed403b8.jpg',
  });
});
