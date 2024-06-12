import Header from "./Header";
import Sidebar from "./Sidebar";
import Data from "./Data";
import { useState } from "react";
import { auth, provider } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(({ user }) => {
        setUser(user);
      }).catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      {user ? (
        <div className="App">
          {<Header photoURL={user.photoURL}/> }
          <div className="App1">
            <Sidebar />
            <Data />
          </div>
        </div>
      ) : (
         <div className="loginwrap">
          <img
            src="https://i.pcmag.com/imagery/reviews/02PHW91bUvLOs36qNbBzOiR-12..v1569471162.png"
            alt="#"
          />
          <button onClick={signIn}>Login to Google Drive Clone</button>
        </div>
      )}
    </>
  );
}

export default App;
