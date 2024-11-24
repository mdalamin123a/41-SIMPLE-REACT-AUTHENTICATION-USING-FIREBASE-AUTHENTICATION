import React from 'react';
import * as firebase from 'firebase/app';
import firebaseConf from './firebaseConf';
import { getAuth, GoogleAuthProvider, signInWithPopup } from  'firebase/auth';
import './App.css';

firebase.initializeApp(firebaseConf);

function App() {
  
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(getAuth(), provider)
    .then(result => {
      const {displayName, email ,photoURL} = result.user;
      console.log(displayName, email, photoURL);
    });
  }
  console.log(getAuth());

  return (
    <div className="App">
      <button onClick={handleSignIn}>Sign in</button>
    </div>
  );
}

export default App;
