import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

(async () => {
  const params = new URLSearchParams(window.location.search);
  const user = params.get("user");
  //initialize LaunchDarkly provider
  const LDProvider = await asyncWithLDProvider({
    clientSideID: "69592d9489126409c0be53fa",
    context: {
      kind: "user",
      key: user ? user : "user-id-123",
      name: user ? user : "Test User",
      team:
        user &&
        (user.toLowerCase() === "andy" ||
          user.toLowerCase() === "randy" ||
          user.toLowerCase() === "sandy")
          ? "marketing"
          : "engineering",
    },
  });

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <LDProvider>
      <App user={user} />
    </LDProvider>,
  );
})();
