// src/components/Auth.js
import { useState } from "react";
import { signInWithEmail, signUpWithEmail, signInWithGoogle} from "../auth";
import "./Auth.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignIn = async () => {
    try {
      const user = await signInWithEmail(email, password);
      console.log("Signed in user:", user);
    } catch (error) {
      console.error("Sign In Error:", error);
    }
  };

  const handleSignUp = async () => {
    try {
      const user = await signUpWithEmail(email, password);
      console.log("Signed up user:", user);
    } catch (error) {
      console.error("Sign Up Error:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("Google signed-in user:", user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
            <h2>{isSignUpMode ? "Sign Up" : "Sign In"}</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isSignUpMode ? (
              <button onClick={handleSignUp}>Sign Up with Email</button>
            ) : (
              <button onClick={handleSignIn}>Sign In with Email</button>
            )}
            <button onClick={handleGoogleSignIn}>Sign In with Google</button>
            <p onClick={() => setIsSignUpMode(!isSignUpMode)} className="toggle-link">
              {isSignUpMode ? "Already have an account? Sign In" : "New user? Sign Up"}
            </p>
      </div>
    </div>
  );
};

export default Auth;
