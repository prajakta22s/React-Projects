import React, { useState } from "react";

const LoginRegistration = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin ? (
        <div>
          <h2>Welcome,{email}!</h2>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
            <button>{isRegister ? "Login" : "Register"}</button>
          <h2>{isRegister ? 'Login' : 'Register' }</h2>
          </form>
          <p>
            {isRegister ? "Don't have account" : "Already have accont? Log in!"}
          </p>
          <button onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginRegistration;
