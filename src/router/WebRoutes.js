import React from "react";
import { Routes, Route } from "react-router-dom";
import { ClientLayout } from "../layouts";
import WebPage from "../pages/web/WebPage";

export function WebRoutes() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page /> {/* children */}
      </Layout>
    );
  };

  return (
    <Routes>
      <Route path="/" element={loadLayout(ClientLayout, WebPage)} />
    </Routes>
  );
}
