import React from 'react';

function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <a href="https://testlab.au.auth0.com/authorize?audience=http://httpbin.org&client_id=KzJIx1GcWvwL4XMAHuBLvs45icF2gmUg&response_type=token&redirect_uri=http://localhost:3000/callback&scope=openid&state=1234">
              Auth0 (Implicit Grant)
            </a>
          </p>
          <p> 
            <a href="https://testlab.au.auth0.com/authorize?audience=http://httpbin.org&client_id=KzJIx1GcWvwL4XMAHuBLvs45icF2gmUg&response_type=code&redirect_uri=http://localhost:3000/callback&scope=openid&code_challenge=xc3uY4-XMuobNWXzzfEqbYx3rUYBH69_zu4EFQIJH8w&code_challenge_method=S256&state=1234">
              Auth0 (Code + PKCE)
            </a>
          </p>
          <p> 
            <a href="https://testlab.au.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost%3A3000&client_id=KzJIx1GcWvwL4XMAHuBLvs45icF2gmUg">
              Logout
            </a>
          </p>
        </header>
      </div>
    );
  }
  
  export default Home;