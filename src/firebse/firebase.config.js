import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

//web Apps firebase configurations

const firebaseConfig = {
	apiKey: 'AIzaSyDLlZMBPF3xLFwc03eMTzkMgmY0koEqsS0',
	authDomain: 'firegram-netninja-4eb3e.firebaseapp.com',
	projectId: 'firegram-netninja-4eb3e',
	storageBucket: 'firegram-netninja-4eb3e.appspot.com',
	messagingSenderId: '476110921398',
	appId: '1:476110921398:web:6fa2af11e34a1d767b5017',
};

//initialize firebase app

firebase.initializeApp(firebaseConfig);

// Anything with interaction with backend storage we will call this constant
export const projectStorage = firebase.storage();
//anytime we want to interact with firestore database we will call this constant
export const projectFirestore = firebase.firestore();

export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
