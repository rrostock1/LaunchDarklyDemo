import React from "react";
import PolicyPage from "./pages/PolicyPage";
import "./styles/App.css";

function App({ user }) {
  return (
    <div className="App">
      <nav style={{ padding: "1rem", background: "#282c34", color: "white" }}>
        <h2>Ralph Rostock's LaunchDarkly Platform Demo</h2>
        {!user || user !== "admin" ? (
          <div>
            If you need to quickly turn off the beta UI, please sign in with
            ?user=admin for emergency revert functionality!
          </div>
        ) : null}
      </nav>
      <main>
        <PolicyPage user={user} />
      </main>
    </div>
  );
}

export default App;
