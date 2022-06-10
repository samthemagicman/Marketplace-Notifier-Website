importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

/*Update with yours config*/
const firebaseConfig = {
    apiKey: 'AIzaSyCXCGD9H-OOnjAC-Zgtw37vbHY4Nd7HXrk',
    appId: '1:1064924076226:web:51b2a206de085a9a21c35b',
    messagingSenderId: '1064924076226',
    projectId: 'marketplacenotifier-436de',
    authDomain: 'marketplacenotifier-436de.firebaseapp.com',
    databaseURL: 'https://marketplacenotifier-436de-default-rtdb.firebaseio.com',
    storageBucket: 'marketplacenotifier-436de.appspot.com',
    measurementId: 'G-TS3JYCW1NL',
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/*messaging.onMessage((payload) => {
console.log('Message received. ', payload);*/
messaging.onBackgroundMessage(function(payload) {
console.log('Received background message ', payload);

const notificationTitle = payload.notification.title;
const notificationOptions = {
    body: payload.notification.body,
};

self.registration.showNotification(notificationTitle,
    notificationOptions);
});