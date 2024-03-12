import React, { useState } from 'react';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import Appbar from './components/Appbar';
import Profile from './components/Profile';
import Entry from './components/Entry';
import Placement from './components/Placement';
import Error from './components/Error';
import Apply from './components/Apply';
import ContactUs from './components/ContactUs';

function App({ store }) {
  const [registered, setRegistered] = useState(false);

  const handleRegistration = () => {
    // Your registration logic here
    // Once registration is successful, update the state
    setRegistered(true);
  };

  function Page() {
    switch (store.getState().NavReducer) {
      case 'Login':
        return <div><Login store={store} /></div>;
      case 'Registration':
        return (
          <div>
            <Registration />
            {registered && <p>You have successfully registered!</p>}
          </div>
        );
      case 'Profile':
        if (localStorage.getItem('role') == 1) return <div><Profile /></div>;
        else return <div><Error /></div>;
      case 'Entry':
        if (localStorage.getItem('role') == 1) return <div><Entry /></div>;
        else return <div><Error /></div>;
      case 'Placement':
        if (
          localStorage.getItem('role') == 1 ||
          localStorage.getItem('role') == 2
        )
          return <div><Placement /></div>;
        else return <div><Error /></div>;
      case 'Apply':
        if (
          localStorage.getItem('role') == 1 ||
          localStorage.getItem('role') == 2
        )
          return <div><Apply /></div>;
        else return <div><Error /></div>;
      case 'ContactUs':
        if (
          localStorage.getItem('role') == 1 ||
          localStorage.getItem('role') == 2
        )
          return <div><ContactUs /></div>;
        else return <div><Error /></div>;
      default:
        // Render Login page by default
        return <div><Login store={store} /></div>;
    }
  }

  return (
    <div className="App">
      <div className="App-body">
        <Appbar store={store} />
        <center><Page /></center>
      </div>
    </div>
  );
}

export default App;
