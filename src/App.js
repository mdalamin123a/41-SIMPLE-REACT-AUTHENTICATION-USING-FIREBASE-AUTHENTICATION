import React from 'react';
import * as firebase from 'firebase/app';
import firebaseConf from './firebaseConf';
import { GoogleAuthProvider } from  'firebase/auth';
import './App.css';

firebase.initializeApp(firebaseConf)
function App() {
  
  const provider = new GoogleAuthProvider();

  return (
    <div className="App">
      <button>Sign in</button>
    </div>
  );
}

export default App;
