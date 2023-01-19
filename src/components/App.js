import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user"
import { ThemeContext, ThemeProvider } from "../context/theme";

function App() {

  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme}>
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
    </main>
  );
}

export default App;
