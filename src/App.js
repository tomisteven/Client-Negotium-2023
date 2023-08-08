//import { Button } from 'semantic-ui-react'
import React from "react";
import { BrowserRouter, HashRouter, Switch } from "react-router-dom";
import { WebRoutes, AdminRoutes } from "./router";
import { AuthProvider } from "./contexts";
import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>

          <WebRoutes />
          <AdminRoutes />

      </HashRouter>
    </AuthProvider>
  );
}
