import Config from "react-native-config";
import * as firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyD0RsAojXRvSnZoveWXm_cIqkmZcV5Q0G8",
  authDomain: "react-native-maps-780d1.firebaseapp.com",
  databaseURL: "https://react-native-maps-780d1.firebaseio.com",
  projectId: "react-native-maps-780d1",
  storageBucket: "react-native-maps-780d1.appspot.com",
  messagingSenderId: "362904715250",
  appId: "1:362904715250:web:1b00201be961e7e559b56b"
};



export default class Firebase {

	static auth;

	static database;

	static init() {

		firebase.initializeApp(firebaseConfig);
		Firebase.auth = firebase.auth;
		Firebase.database = firebase.database;
	}
}