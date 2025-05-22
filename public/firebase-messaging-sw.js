importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyD13bd2N1P8IwywaT9_MPul9iJZdKuhuX0",
    authDomain: "tour-70dad.firebaseapp.com",
    projectId: "tour-70dad",
    storageBucket: "tour-70dad.firebasestorage.app",
    messagingSenderId: "9045164668",
    appId: "1:9045164668:web:6180c53050f0e69f2f3ff9",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
