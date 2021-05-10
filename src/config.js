import firebase from 'firebase/app';

// const setting={timeStampsInSnapshots:true};

const firebaseConfig = {
  apiKey: 'AIzaSyDDXk5_5bJtidn8LVZoy2XZkEtHN6rX_DY',
  authDomain: 'dear-diary-charuka.firebaseapp.com',
  projectId: 'dear-diary-charuka',
  storageBucket: 'dear-diary-charuka.appspot.com',
  messagingSenderId: '68075590818',
  appId: '1:68075590818:web:3724419e04a670299833fb',
  measurementId: 'G-M5YSVXRSW3',
};
firebase.initializeApp(firebaseConfig);
// const Firebase=firebase.firestore();
// firebase.firestone().settings(settings);

export default firebase;
