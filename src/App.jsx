// src/App.js
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Auth from "./components/Auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          {user.displayName && 
          <img src={user.photoURL} alt={user.displayName} />
          }
          <h1>Welcome, {user.email}</h1>
          <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
