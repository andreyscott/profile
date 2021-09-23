const firebaseConfig = {
    apiKey: "AIzaSyDp3nDx63zoNvVVKAnKpTloZ3x4DmVI-IU",
    authDomain: "andrey-profile.firebaseapp.com",
    projectId: "andrey-profile",
    storageBucket: "andrey-profile.appspot.com",
    messagingSenderId: "969380706067",
    appId: "1:969380706067:web:c73b703e61c2c58f650ce6",
    measurementId: "G-5G3K0ZFQ4S"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);