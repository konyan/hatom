import "./App.css";
import HomePage from "./components/pages/home";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/molecules/headers";
import React from "react";
import { ThemeProvider } from "./context/themeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <body className="bg-white dark:bg-black transition-all">
          <main>
            <div className="absolute w-full right-0 top-0 z-50">
              <Header />
            </div>
            <HomePage />
          </main>
        </body>
      </Router>
    </ThemeProvider>
  );
}
