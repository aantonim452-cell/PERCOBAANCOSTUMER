const firebaseConfig = {
    apiKey: "AIzaSyDummyKeyExampleReplaceWithYourOwn12345",
    authDomain: "llc-store-mod.firebaseapp.com",
    projectId: "llc-store-mod",
    storageBucket: "llc-store-mod.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};

let db = null;
let isFirebaseReady = false;
try {
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    isFirebaseReady = true;
    console.log("✅ Firebase ready");
} catch(e) { console.warn("Firebase error", e); }