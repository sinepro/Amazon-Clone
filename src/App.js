import './App.css';

import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51MMUoFGo1ThC2Ls8CzAV1j1Ee3f9dFKFNueZmXSZz7S6VIQx77UvLxLZvrCgftVxVBlKqjc0gLwPRMiLTojWcfZW00EMZTuRJM"
);

function App() {
  const [{ }, dispatch] = useStateValue();

  // Listener - keeping track of the user
  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      //console.log('THE USER IS >>> ', authUser);
      if (authUser) {
        // The user just logged in / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route exact path="/checkout" element={<div><Header /><Checkout /></div>} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/payment'
            element={
              <div>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </div>} />
          <Route exact path='/orders' element={<div><Header /><Orders /></div>} />
          <Route exact path="/" element={<div><Header /><Home /></div>} />
        </Routes>
      </div>
    </Router>


  );
}
export default App;
