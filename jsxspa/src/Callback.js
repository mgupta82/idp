import React from 'react';
import queryString from 'query-string';
import {Link} from 'react-router-dom';

function Callback() {
    const parsed = queryString.parse(window.location.search);
    console.log(parsed);

    const authResult = queryString.parse(window.location.hash);
    console.log(authResult);

    if(parsed && parsed.code) {
      // Get Token
    } else if(authResult && authResult.access_token) {
      localStorage.setItem("isLoggedIn", 'true');
      localStorage.setItem('accessToken',authResult.access_token);
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
          Welcome User <Link to="/user">Your Details</Link>
          </p>
        </header>
      </div>
    );
  }
  
  export default Callback;